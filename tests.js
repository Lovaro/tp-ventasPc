describe("precio Maquina componentes", () => {
  it("1 - precioMaquina", () => {
    const precioTotal = 320;
    expect(
      precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])
    ).to.be.eql(precioTotal);
  });

  it("2 - cantidad Ventas Componente", () => {
    const venta = 2;
    expect(cantidadVentasComponente("Monitor ASC 543")).to.be.eql(venta);
  });
  it("3 - vendedora Del mes y anio", () => {
    expect(vendedoraDelMes(1, 2019)).to.be.eql("Ada");
  });
  it("4 - ventas del mes y anio", () => {
    expect(ventasMes(1, 2019)).to.be.eql(1250);
  });
  it("5 - ventas vendedora", () => {
    expect(ventasVendedora("Grace")).to.be.eql(900);
  });
  it("6 - componente mas Vendido", () => {
    expect(componenteMasVendido(1, 2019)).to.be.eql("Monitor GPRS 3000");
  });
  it("huboVentas(mes, anio)", () => {
    expect(huboVentas(3, 2019)).to.be.eql(false);
  });
  /*
  describe("ventas de pc", ()=>{
    it('precioMaquina(componentes)', ()=>{
        const componentes =["Monitor GPRS 3000", "Motherboard ASUS 1500"]
        expect(precioMaquina(componentes)).to.be.eql(320)
    });

    it("cantidadVentasComponente(componente)", () => {
        const venta = 2;
        expect(cantidadVentasComponente("Monitor ASC 543")).to.be.eql(venta);
    });

    it("vendedoraDelMes(mes, anio)",()=>{
        expect(vendedoraDelMes(1, 2019)).to.be.eql("Ada");
    });

    it("ventasMes(mes, anio)",()=>{
        expect(ventasMes(1, 2019)).to.be.eql(1250);
    });

    it("ventasVendedora(nombre)",()=>{
        expect(ventasVendedora("Grace")).to.be.eql(900);
    });

    it("componenteMasVendido()",()=>{
        expect(componenteMasVendido()).to.be.eql("Monitor GPRS 3000")
    });

    it("huboVentas(mes, anio)",()=>{
        expect(huboVentas(3, 2019)).to.be.eql(false);
    });
})
*/
  it("2 - 1 ventas Sucursal", () => {
    expect(ventasSucursal("Centro")).to.be.eql(990);
  });
  it("2 - 2 sucursal del mes", () => {
    expect(sucursalDelMes(1, 2019)).to.be.eql("Centro");
  });
});
