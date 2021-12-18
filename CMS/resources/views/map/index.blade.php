@extends('layouts.app')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Wegwijzer</h1>
            <a class="btn btn-primary mt-2 mt-3" href="/wegwijzer/create" role="button">Toevoegen</a>
            <hr>
        </div>
    </div>

    <div class="row mt-5">

        @foreach( $floorOnes as $floorOne)
            <div class="col-3">
                <a href="/wegwijzer/{{ $floorOne->id }}"><h3>{{ $floorOne->title }}</h3></a>
            </div>
        @endforeach

        @foreach( $floorTwos as $floortwo)
            <div class="col-3">
                <a href="/wegwijzer/{{ $floortwo->id }}"><h3>{{ $floortwo->title }}</h3></a>
            </div>
        @endforeach

        @foreach( $floorThrees as $floorThree)
            <div class="col-3">
                <a href="/wegwijzer/{{ $floorThree->id }}"><h3>{{ $floorThree->title }}</h3></a>
            </div>
        @endforeach
        @foreach( $floorFours as $floorFour)
            <div class="col-3">
                <a href="/wegwijzer/{{ $floorFour->id }}"><h3>{{ $floorFour->title }}</h3></a>
            </div>
        @endforeach

    </div>

@endsection
