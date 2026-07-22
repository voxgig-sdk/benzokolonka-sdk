<?php
declare(strict_types=1);

// Benzokolonka SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BenzokolonkaMakeContext
{
    public static function call(array $ctxmap, ?BenzokolonkaContext $basectx): BenzokolonkaContext
    {
        return new BenzokolonkaContext($ctxmap, $basectx);
    }
}
