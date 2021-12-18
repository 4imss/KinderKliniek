<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Sub extends Model

{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'subTitle0',
        'subDescription0',
        'subTitle1',
        'subDescription1',
        'subTitle2',
        'subDescription2',
        'subTitle3',
        'subDescription3',
        'clinic_id',
    ];

    // relation to other database
    public function clinic()
    {
        return $this->belongsTo(Clinic::class, 'clinic_id');
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
