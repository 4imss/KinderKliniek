@extends('layouts.app')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Smoelenboek</h1>
            <a class="btn btn-primary mt-2 mt-3" href="/smoelenboek/create" role="button">Werknemer toevoegen</a>
            <hr>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12">
            <ul>
                <div class="row">
                    @foreach ($facebooks as $facebook)
                        <div class="col-md-4">
                            <a href="/smoelenboek/{{ $facebook->id }}">{{ $facebook->name }}</a>
                            <a href="/poli/{{ $facebook->clinic->id }}"></a>
                            <img src="{{ asset('storage/' . $facebook->image) }}" alt="" class="img-thumbnail">
                            <div class="pb-4"></div>
                        </div>
                    @endforeach
                </div>

                <li class="row">
                    <div class="cal-12 d-flex justify-content-center">
                        {{ $facebooks->links('pagination::bootstrap-4') }}
                    </div>
                </li>

            </ul>
        </div>
    </div>

@endsection
