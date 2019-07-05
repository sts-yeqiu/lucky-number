import { suite, test } from "@testdeck/mocha";
import { assert } from "chai";

import randomNum from "../lib/index";

@suite("# id testing")
class TestSuite {
  public static before() {}

  public static after() {}

  @test
  "uuid testing"() {
    
    console.log(randomNum.randomNum);
    
  }

}
