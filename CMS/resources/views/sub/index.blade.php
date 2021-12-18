@extends('layouts.app')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Sub overzicht</h1>
            <a class="btn btn-primary mt-2 mt-3" href="/sub/create" role="button">Toevoegen</a>
            <hr>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12">
            <ul>
                <hr>
                @foreach ($subs as $sub)
                <li>
                    <a href="/sub/{{ $sub->id }}">{{ $sub->subTitle0 }}</a>
                    <span> {{ $sub->subDescription0 }}</span>
                    <span> {{ $sub->subTitle1 }}</span>
                    <span> {{ $sub->subDescription1 }}</span>
                    <span> {{ $sub->subTitle2 }}</span>
                    <span> {{ $sub->subDescription2 }}</span>
                    <span> {{ $sub->subTitle3 }}</span>
                    <span> {{ $sub->subDescription3 }}</span>

                    <a href="/poli/{{ $sub->clinic->id }}"><span> ({{ $sub->clinic_id }})</span></a>
                    <hr>
                </li>
                @endforeach
            </ul>
        </div>
    </div>

@endsection
