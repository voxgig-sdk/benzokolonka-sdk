# Benzokolonka SDK feature factory

from benzokolonka_sdk.feature.base_feature import BenzokolonkaBaseFeature
from benzokolonka_sdk.feature.ratelimit_feature import BenzokolonkaRatelimitFeature
from benzokolonka_sdk.feature.retry_feature import BenzokolonkaRetryFeature
from benzokolonka_sdk.feature.test_feature import BenzokolonkaTestFeature
from benzokolonka_sdk.feature.timeout_feature import BenzokolonkaTimeoutFeature


_FEATURES = {
    "base": lambda: BenzokolonkaBaseFeature(),
    "ratelimit": lambda: BenzokolonkaRatelimitFeature(),
    "retry": lambda: BenzokolonkaRetryFeature(),
    "test": lambda: BenzokolonkaTestFeature(),
    "timeout": lambda: BenzokolonkaTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
