@extends('layouts.app')

@section('title', 'Plattegrond bewerken')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Verdieping bewerken</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <form action="/wegwijzer/{{ $map->id }}" method="POST" enctype="multipart/form-data" class="pb-5">
                @method('PATCH')
                @include('map.form')

                <div class="form-group pt-3">
                    <button type="submit" class="btn btn-primary">Opslaan</button>
                </div>

            </form>
        </div>
    </div>

@endsection
