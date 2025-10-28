describe("math utils", () => {
  it("Dado dos números, cuando se suman, entonces retorna el total", () => {
    const suma = (a: number, b: number) => a + b;
    expect(suma(2, 3)).toBe(5);
  });
});
