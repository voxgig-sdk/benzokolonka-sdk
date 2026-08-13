# Benzokolonka SDK exists test

import pytest
from benzokolonka_sdk import BenzokolonkaSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BenzokolonkaSDK.test(None, None)
        assert testsdk is not None
