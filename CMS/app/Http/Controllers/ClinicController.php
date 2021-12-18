<?php

namespace App\Http\Controllers;

use App\Models\Clinic;
use App\Models\Sub;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClinicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {

        // Get which care and put in variable
        $medicalCares = Clinic::MedicalCare()->get();
        $paramedicCares = Clinic::ParamedicCare()->get();
        $nonMedicalCares = Clinic::NonMedicalCare()->get();
        $childMentalCares = Clinic::ChildMentalCare()->get();

        $clinics = Clinic::all();
        $subs = Sub::all();

        return view('clinic.index', compact('medicalCares', 'paramedicCares', 'nonMedicalCares', 'childMentalCares', 'clinics', 'subs'));
    }

    // Makes sure u need to be logged in before u can use this controller, except the API
    public function __construct()
    {
        $this->middleware('auth')->except('api');
    }

    // Returns all API data from CLinic
    public function api()
    {
        return Clinic::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clinics = Clinic::all();
        $clinic = new Clinic();

        return view('clinic.create', compact('clinics', 'clinic'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store()
    {
        Clinic::create($this->validateRequest());

        return redirect('poli');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function show(clinic $clinic)
    {

        return view('clinic.show', compact('clinic'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function edit(Clinic $clinic)
    {
        $clinics = Clinic::all();

        return view('clinic.edit', compact('clinic', $clinics));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Clinic $clinic)
    {

        $clinic->update($this->validateRequest());

        return redirect('poli/' . $clinic->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Clinic $clinic)
    {
        $clinic->delete();

        return redirect('poli');
    }

    // validateRequest for cleaner controller
    private function validateRequest()
    {
        return request()->validate([
            'title' => 'required',
            'description' => 'required',
            'care' => 'required',
        ]);
    }
}
