<?php

namespace App\Http\Controllers;

use App\Models\Map;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // Map is the wegwijzer
    public function index()
    {
        // Get which floor and put in variable
        $floorOnes = Map::FloorOnes()->get();
        $floorTwos = Map::FloorTwos()->get();
        $floorThrees = Map::FloorThrees()->get();
        $floorFours = Map::FloorFours()->get();

        $maps = Map::all();

        return view('map.index', compact('maps', 'floorOnes', 'floorTwos', 'floorThrees', 'floorFours'));
    }

    // Makes sure u need to be logged in before u can use this controller, except the API
    public function __construct()
    {
        $this->middleware('auth')->except('api');
    }

    // Returns all API data from Map
    public function api()
    {
        return Map::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $maps = Map::all();
        $map = new Map();


        return view('map.create', compact('maps', 'map'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $map = Map::create($this->validateRequest());

        $this->storeImage($map);


        return redirect('wegwijzer');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function show(Map $map)
    {
        return view('map.show', compact('map'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function edit(Map $map)
    {
        $maps = Map::all();

        return view('map.edit', compact('map', $maps));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Map $map)
    {
        $map->update($this->validateRequest());

        $this->storeImage($map);

        return redirect('wegwijzer/' . $map->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Map  $map
     * @return \Illuminate\Http\Response
     */
    public function destroy(Map $map)
    {
        $map->delete();

        return redirect('wegwijzer');
    }

    // validateRequest for cleaner controller
    private function validateRequest()
    {
        return request()->validate([
            'title' => 'required',
            'floor' => 'required',
            'image' => 'sometimes|file|image|max:5000',
        ]);
    }

    // The storeImage function using a package to resize to 300x300 also store the image in uploads in public
    private function storeImage($map)
    {
        if (request()->has('image')) {
            $map->update([
                'image' => request()->image->store('uploads', 'public'),
            ]);

            $image = Image::make(public_path('storage/' . $map->image))->fit(2564, 1443);
            $image->save();
        }
    }
}
