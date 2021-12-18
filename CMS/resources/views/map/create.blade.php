@extends('layouts.app')

@section('title', 'Plattegrond toevoegen')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Plattegrond toevoegen</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <form action="/wegwijzer" method="POST" class="pb-5" enctype="multipart/form-data">
                @include('map.form')

                <div class="form-group pt-3">
                    <button type="submit" class="btn btn-primary">Toevoegen</button>
                </div>

            </form>
        </div>
    </div>



@endsection
