<?php

/*
 * This file is part of acpl/my-tags.
 *
 * Copyright (c) 2021 forum.android.com.pl.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Acpl\MyTags;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))->js(__DIR__.'/js/dist/forum.js')->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\ApiController(ShowForumController::class))->prepareDataForSerialization(LoadForumTagsRelationship::class),

    (new Extend\Settings())->serializeToForum('my-tags.enable-placeholder', 'acpl-my-tags.enable-placeholder', function ($value) {
        return ! empty($value);
    }),
];
