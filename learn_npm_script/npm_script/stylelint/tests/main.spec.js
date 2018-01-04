const expect = require("chai").expect;
// 测试代码 先写测试，再写业务让测试通过
// 测试驱动开发TDD
// 测试覆盖率 80%？ 95%
const { add, minus } = require("../main");

describe("两数相加等于和", () => {
    // 一万点伤害
    it("1+1 应该等于2", () => {
        expect(add(1,1)).to.equal(2);
    });
    it("1+2 应该等于3", () => {
        expect(add(1,2)).to.equal(3);
    });
    it("-9+2 应该等于-7", () => {
        expect(add(-9,2)).to.equal(-7);
    });
});

describe("两数相减为差", () => {
    it("4-2=2", () => {
        expect(minus(4,2)).to.equal(2);
    });
    it("0-2=-2", () => {
        expect(minus(0,2)).to.equal(-2);
    });
    it("2-9=-7", () => {
        expect(minus(2,9)).to.equal(-7);
    });
});

describe("参数类型错误返回NaN", () => {
    it("add参数NaN", () => {
        expect(isNaN(add(1,"200"))).to.equal(true);
    });
    it("minus参数NaN", () => {
        expect(isNaN(minus(1,"200"))).to.equal(true);
    });
});