<?php

namespace Acpl\MyTags;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Extend;
use Flarum\Api\Context;
use Flarum\Api\Endpoint;
use Flarum\Api\Resource;
use Flarum\Api\Schema;

return [
    (new Extend\Frontend('forum'))->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    // @TODO: Replace with the new implementation https://docs.flarum.org/2.x/extend/api#extending-api-resources
    (new Extend\ApiController(ShowForumController::class))
        ->prepareDataForSerialization(LoadForumTagsRelationship::class),

    (new Extend\Settings())
        ->serializeToForum(
            'my-tags.enable-placeholder',
            'acpl-my-tags.enable-placeholder',
            fn ($value) => ! empty($value)
        ),
];
