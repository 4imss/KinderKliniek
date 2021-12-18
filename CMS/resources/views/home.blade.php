@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">

                <div class="alert alert-primary cssAlert" role="alert">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('Ingelogd als,') }} {{ Auth::user()->name }}{{ __('!') }}
                </div>


            <a href="https://www.dekinderkliniek.nl/">
                <img src="{{URL::asset('/images/logo/deKinderKliniekLogo.png')}}" class="homeLogo">
            </a>

            <div class="row">
                <div class="column">
                    <a href="/wegwijzer">
                        <img src="{{URL::asset('/images/logo/wegwijzerMenu.png')}}" class="imgSizeUpper">
                    </a>
                </div>

                <div class="column">
                    <a href="/informatie">
                        <img src="{{URL::asset('/images/logo/InformatieMenu.png')}}" class="imgSizeUpper">
                    </a>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <a href="/games">
                        <img src="{{URL::asset('/images/logo/gamesMenu.png')}}" class="imgSizeLower">
                    </a>
                </div>

                <div class="column">
                    <a href="/muziekids">
                        <img src="{{URL::asset('/images/logo/muziekidsMenu.png')}}" class="imgSizeLower">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
