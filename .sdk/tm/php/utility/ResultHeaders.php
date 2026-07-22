<?php
declare(strict_types=1);

// Benzokolonka SDK utility: result_headers

class BenzokolonkaResultHeaders
{
    public static function call(BenzokolonkaContext $ctx): ?BenzokolonkaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
