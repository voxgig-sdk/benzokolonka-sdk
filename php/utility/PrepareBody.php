<?php
declare(strict_types=1);

// Benzokolonka SDK utility: prepare_body

class BenzokolonkaPrepareBody
{
    public static function call(BenzokolonkaContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
