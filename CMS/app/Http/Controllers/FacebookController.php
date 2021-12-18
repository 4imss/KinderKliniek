<?php

namespace App\Http\Controllers;

use App\Models\Clinic;
use App\Models\Facebook;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class FacebookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // with Facebook I mean smoelenboek in the mobile application
    public function index()
    {
        // Get's all data from Facebook and puts it in page's of 12
        $facebooks = Facebook::paginate(12);

        return view('facebook.index', compact('facebooks'));
    }

    // Makes sure u need to be logged in before u can use this controller, except the API
    public function __construct()
    {
        $this->middleware('auth')->except('api');
    }

    // Returns all API data from Facebook
    public function api()
    {
        return Facebook::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clinics = Clinic::all();
        $facebooks = Facebook::all();
        $facebook = new Facebook();

        return view('facebook.create', compact('facebook', 'clinics', 'facebooks'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $facebook = Facebook::create($this->validateRequest());

        $this->storeImage($facebook);

        return redirect('smoelenboek');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Facebook  $facebook
     * @return \Illuminate\Http\Response
     */
    public function show(Facebook $facebook)
    {
        return view('facebook.show', compact('facebook'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Facebook  $facebook
     * @return \Illuminate\Http\Response
     */
    public function edit(Facebook $facebook)
    {
        $clinics = Clinic::all();
        $facebooks = Facebook::all();

        return view('facebook.edit', compact('clinics','facebook', $facebooks));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Facebook  $facebook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Facebook $facebook)
    {
        $facebook->update($this->validateRequest());

        $this->storeImage($facebook);

        return redirect('smoelenboek/' . $facebook->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Facebook  $facebook
     * @return \Illuminate\Http\Response
     */
    public function destroy(Facebook $facebook)
    {
        $facebook->delete();

        return redirect('smoelenboek');
    }

    // validateRequest for cleaner controller
    private function validateRequest()
    {
        return request()->validate([
            'name' => 'required',
            'task' => 'required',
            'date' => 'required',
            'information' => 'required',
            'information2' => 'required',
            'email' => 'required|email',
            'image' => 'sometimes|file|image|max:5000',
            'clinic_id' => 'required',
        ]);
    }

    // The storeImage function using a package to resize to 300x300 also store the image in uploads in public
    private function storeImage($facebook)
    {
        if (request()->has('image')) {
            $facebook->update([
                'image' => request()->image->store('uploads', 'public'),
            ]);

            $image = Image::make(public_path('storage/' . $facebook->image))->fit(300, 300);
            $image->save();
        }
    }
}
