@extends('layouts.app')

@section('title', 'Poli overzicht')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Poli overzicht</h1>
            <a class="btn btn-primary mt-2 mt-3" href="poli/create" role="button">Toevoegen</a>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-3">
            <h3>Medische zorg</h3>
            <ul>
                @foreach ($medicalCares as $medicalCare)
                <li>
                    <a href="/poli/{{ $medicalCare->id }}">{{ $medicalCare->title }}</a>
                    <span> {{ $medicalCare->description }}</span>
                </li>
                    <hr>
                @endforeach
            </ul>
        </div>
        <div class="col-3">
            <h3>Paramedische zorg</h3>
            <ul>
                @foreach ($paramedicCares as $paramedicCare)
                    <li>
                        <a href="/poli/{{ $paramedicCare->id }}">{{ $paramedicCare->title }}</a>
                        <span> {{ $paramedicCare->description }}</span>
                    </li>
                    <hr>
                @endforeach
            </ul>
        </div>
        <div class="col-3">
            <h3>Niet medische zorg</h3>
            <ul>
                @foreach ($nonMedicalCares as $nonMedicalCare)
                    <li>
                        <a href="/poli/{{ $nonMedicalCare->id }}">{{ $nonMedicalCare->title }}</a>
                        <span> {{ $nonMedicalCare->description }}</span>
                    </li>
                    <hr>
                @endforeach
            </ul>
        </div>
        <div class="col-3">
            <h3>De Kinder GGZ</h3>
            <ul>
                @foreach ($childMentalCares as $childMentalCare)
                    <li>
                        <a href="/poli/{{ $childMentalCare->id }}">{{ $childMentalCare->title }}</a>
                        <span> {{ $childMentalCare->description }}</span>
                    </li>
                    <hr>
                @endforeach
            </ul>
        </div>

    </div>

@endsection
