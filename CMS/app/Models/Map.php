<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Map extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'title',
        'floor',
        'image',
    ];

    // scope where floor == 1 and put it in FloorOnes and so on
    public function scopeFloorOnes($query)
    {
        return $query->where('floor', '1')->where('title', '1e Verdieping');
    }

    public function scopeFloorTwos($query)
    {
        return $query->where('floor', '2')->where('title', '2e Verdieping');
    }

    public function scopeFloorThrees($query)
    {
        return $query->where('floor', '3')->where('title', '3e Verdieping');
    }

    public function scopeFloorFours($query)
    {
        return $query->where('floor', '4')->where('title', '4e Verdieping');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];
}
