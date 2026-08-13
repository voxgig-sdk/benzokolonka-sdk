# Benzokolonka SDK utility: make_context

from benzokolonka_sdk.core.context import BenzokolonkaContext


def make_context_util(ctxmap, basectx):
    return BenzokolonkaContext(ctxmap, basectx)
