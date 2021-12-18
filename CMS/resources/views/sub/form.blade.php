<div class="form-group">
    <label for="subTitle0">*Naam:</label>
    <input type="text" name="subTitle0" value="{{ old('subTitle0') ?? $sub->subTitle0 }}" class="form-control">
    <div>{{ $errors->first('subTitle0') }}</div>
</div>

<div class="form-group">
    <div class="form-floating">
        <label for="subDescription0">*Beschrijving:</label>
        <textarea type="text" rows="10" cols="30" name="subDescription0" class="form-control" id="floatingTextarea">{{ old('subDescription0') ?? $sub->subDescription0 }}</textarea>
        <div>{{ $errors->first('subDescription0') }}</div>
    </div>
</div>

<div class="form-group">
    <label for="subTitle1">Naam 2:</label>
    <input type="text" name="subTitle1" value="{{ old('subTitle1') ?? $sub->subTitle1 }}" class="form-control">
</div>

<div class="form-group">
    <div class="form-floating">
        <label for="subDescription1">Beschrijving 2:</label>
        <textarea type="text" rows="10" cols="30" name="subDescription1" class="form-control" id="floatingTextarea">{{ old('subDescription1') ?? $sub->subDescription1 }}</textarea>
    </div>
</div>

<div class="form-group">
    <label for="subTitle2">Naam 3:</label>
    <input type="text" name="subTitle2" value="{{ old('subTitle2') ?? $sub->subTitle2 }}" class="form-control">
</div>

<div class="form-group">
    <div class="form-floating">
        <label for="subDescription2">Beschrijving 3:</label>
        <textarea type="text" rows="10" cols="30" name="subDescription2" class="form-control" id="floatingTextarea">{{ old('subDescription') ?? $sub->subDescription2 }}</textarea>
    </div>
</div>

<div class="form-group">
    <label for="subTitle3">Naam 4:</label>
    <input type="text" name="subTitle3" value="{{ old('subTitle3') ?? $sub->subTitle3 }}" class="form-control">
</div>

<div class="form-group">
    <div class="form-floating">
        <label for="subDescription3">Beschrijving 4:</label>
        <textarea type="text" rows="10" cols="30" name="subDescription3" class="form-control" id="floatingTextarea">{{ old('subDescription3') ?? $sub->subDescription3 }}</textarea>
    </div>
</div>


<div class="form-group">
    <label for="clinic_id">*Toevoegen aan Poli:</label>
    <select name="clinic_id" id="clinic_id" class="form-control">
        <option value="" disabled selected>-Selecteer poli-</option>
            @foreach( $clinics as $clinic )
                <option value="{{ $clinic->id }}">{{ $clinic->title }}</option>
            @endforeach



    </select>
    <div>{{ $errors->first('clinic_id') }}</div>
</div>

@csrf
