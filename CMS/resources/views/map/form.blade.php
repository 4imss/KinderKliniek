<div class="form-group">
    <label for="title">*Verdiepings naam:</label>
    <select name="title" id="title" class="form-control">
        <option value="" disabled selected>-Selecteer verdieping-</option>
        <option value="1e Verdieping" {{ $map->title == '1e Verdieping' ? 'selected' : '' }}>1e Verdieping</option>
        <option value="2e Verdieping" {{ $map->title == '2e Verdieping' ? 'selected' : '' }}>2e Verdieping</option>
        <option value="3e Verdieping" {{ $map->title == '3e Verdieping' ? 'selected' : '' }}>3e Verdieping</option>
        <option value="4e Verdieping" {{ $map->title == '4e Verdieping' ? 'selected' : '' }}>4e Verdieping</option>
    </select>
    <div>{{ $errors->first('title') }}</div>
</div>

<div class="form-group">
    <label for="floor">*Verdiepings nummer:</label>
    <select name="floor" id="floor" class="form-control">
        <option value="" disabled selected>-Selecteer verdieping-</option>
        <option value="1" {{ $map->floor == '1' ? 'selected' : '' }}>1</option>
        <option value="2" {{ $map->floor == '2' ? 'selected' : '' }}>2</option>
        <option value="3" {{ $map->floor == '3' ? 'selected' : '' }}>3</option>
        <option value="4" {{ $map->floor == '4' ? 'selected' : '' }}>4</option>
    </select>
    <div>{{ $errors->first('floor') }}</div>
</div>

<div class="form-group d-flex flex-column">
    <label for="image">Foto: <span class="text-secondary">(Max 5MB)</span></label>
    <input type="file" name="image" class="py-2">
</div>

@csrf
