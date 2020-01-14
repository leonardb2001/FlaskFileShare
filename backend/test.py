
import unittest

import test.database.testUserDatabase as testUserDatabase

loader = unittest.TestLoader()
suite = unittest.TestSuite()

suite.addTests(loader.loadTestsFromModule(testUserDatabase))

unittest.TextTestRunner().run(suite)
