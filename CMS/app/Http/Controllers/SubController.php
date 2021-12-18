<?php

namespace App\Http\Controllers;

use App\Models\Clinic;
use App\Models\Sub;
use Illuminate\Http\Request;
use function Sodium\compare;

class SubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subs = Sub::all();
        $clinics = Clinic::all();


        return view('sub.index', compact('subs', 'clinics'));
    }

    // Makes sure u need to be logged in before u can use this controller, except the API
    public function __construct()
    {
        $this->middleware('auth')->except('api');
    }

    // Returns all API data from Facebook
    public function api()
    {
        return Sub::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clinics = Clinic::all();
        $subs = Sub::all();
        $sub = new Sub();

        return view('sub.create', compact('subs', 'sub', 'clinics'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {

        Sub::create($this->validateRequest());

        return redirect('sub');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(sub $sub)
    {

        return view('sub.show', compact('sub'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(sub $sub)
    {
        $subs = Sub::all();
        $clinics = Clinic::all();

        return view('sub.edit', compact('sub', 'clinics', $subs));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sub $sub)
    {
        $sub->update($this->validateRequest());

        return redirect('sub/' . $sub->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(sub $sub)
    {
        $sub->delete();

        return redirect('sub');
    }

    // validateRequest for cleaner controller
    private function validateRequest()
    {
        return request()->validate([
            'subTitle0' => 'required',
            'subDescription0' => 'required',
            'subTitle1' => 'nullable',
            'subDescription1' => 'nullable',
            'subTitle2' => 'nullable',
            'subDescription2' => 'nullable',
            'subTitle3' => 'nullable',
            'subDescription3' => 'nullable',
            'clinic_id' => 'required',
        ]);
    }
}
