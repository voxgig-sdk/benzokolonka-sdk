# Benzokolonka SDK feature factory

from benzokolonka_sdk.feature.base_feature import BenzokolonkaBaseFeature
from benzokolonka_sdk.feature.test_feature import BenzokolonkaTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BenzokolonkaBaseFeature(),
        "test": lambda: BenzokolonkaTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
