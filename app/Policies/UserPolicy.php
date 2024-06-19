<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    /**
     * Determine whether the user can upload files.
     *
     * @param  \App\User  $user or null
     * @return mixed
     */
    public function uploadFiles(?User $user)
    {
        return true;
    }
}
