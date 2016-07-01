<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Storage;
use App\Image;
use App\Tag;
use Auth;
use File;
use DB;
use DateTime;

class ImageController extends Controller
{
    public function create(Request $request)
    {
        $create = function($item) {
            $data = [
                'status' => 'false',
                'message' => ''
            ];
            $user = Auth::user();
            if (!$item->isValid()) {
                $data['status'] = false;
                $data['message'] = 'file invalid, could not upload: ' . $item->getClientOriginalName();
                return $data;
            }
            $img = new Image();
            $img->name = $item->getClientOriginalName();
            $img->user_id = $user->id;
            if ($img->save()) {
                $img->storage_location = 'useruploads' . DIRECTORY_SEPARATOR . $user->id . DIRECTORY_SEPARATOR . $img->id . date('Y-m-d-H:i:s') . $item->getClientOriginalName();
                if (Storage::disk('local')->put($img->storage_location, File::get($item))) {
                    if ($img->save()) {
                        $data['status'] = true;
                        $data['image'] = $img;
                        return $data;
                    }
                } else {
                    $data['message'] = 'Image file could not be saved: ' . $item->getClientOriginalName();
                    $img->delete();
                    return $data;
                }
            }
        };
        //afaik there is no way to catch the file upload exceeded error in PHP
        $files = isset($request->allFiles()['files']) ? $request->allFiles()['files'] : [];
        $results = array_map($create, $files);
        $errors = [];
        $successes = [];
        foreach ($results as $index => $result) {
            if (!$result['status']) {
                $errors[] = $result['message'];
            } else {
                $successes[] = $result['image'];
            }
        }
        if (count($errors) && !count($successes)) {
            return response()->error($errors);
        } else if(count($successes)){
            return response()->success(['errors' => $errors, 'images' => $successes]);
        }

    }

    public function update(Request $request, $id)
    {
        //this could be put in a seperate FormRequest, but validation in this case is minimal
        $this->validate($request, [
            'name'  => 'required|max:255',
            'description' => 'max:255',
            'tags.*.name' => 'required|max:255'
        ]);
        $req = $request->all();
        if ($image = Image::with('tags')->find($id)) {
            $tagIds = [];
            if ($request->has('tags')) {
                foreach ($request->tags as $key => $reqTag) {
                    if (isset($reqTag['type']) && ($reqTag['type'] == 'new')) {
                        $tag = new Tag();
                        $tag->name = $reqTag['name'];
                        $tag->save();
                        $tagIds[] = $tag->id;
                    } else {
                        $tagIds[] = $reqTag['id'];
                    }
                }
            }
            $image->tags()->sync($tagIds);
            $image->description = $request->input('description', '');
            $image->name = $request->input('name');
            $image->save();
            return response()->success($image);
        } else {
            return response()->error('Could not find Image');
        }
    }

    public function listImages(Request $request)
    {
        $user = Auth::user();
        if ($request->has('tag')) {
            $tag = $request->tag;
            $images = Image::with('tags')
                ->whereHas('tags', function($q) use (&$tag) {
                    $q->where('name', 'like', $tag.'%');
                })
                ->where('user_id', $user->id)
                ->get();
        } else {
            $images = $user
                ->images()
                ->with('tags')
                ->orderBy('created_at', 'desc')
                ->get();
        }
        return response()->success($images);
    }

    public function getImageById(Request $request, $id)
    {
        $image = Auth::user()->images()->where('id', $id)->first();
        if ($image) {
            return response()->success($image);
        } else {
            return response()->error('Could not find image');
        }
    }

    public function getImageFile(Request $request, $id)
    {
        $image = Auth::user()->images()->where('id', $id)->first();
        if ($image) {
            return response()->file(storage_path() . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . $image->storage_location);
        } else {
            return response()->error('Could not find image');
        }
    }

    public function deleteImage(Request $request, $id)
    {
        $image = Auth::user()->images()->where('id', $id)->first();
        if ($image && $image->delete()) {
            $deleted = Storage::delete($image->storage_location);
            if (!$deleted) {
                return response()->error('deleted model but could not delete file');
            } else {
                return response()->success($id);
            }
        }

    }
}
