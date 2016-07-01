<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Tag;
use Auth;

class TagController extends Controller
{
    public function listTags(Request $request) {
        if ($query = $request->query('q')) {
            $results = Tag::where('name', 'like', $query . '%')->get();
            if (count($results)) {
                return response()->success($results);
            } else {
                return [];
            }
        } else {
            return response()->error('No tags found');
        }
    }
}
