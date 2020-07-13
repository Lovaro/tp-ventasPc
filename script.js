const precioMaquina = (componentes) => {
  return local.precios.reduce((total, precio) => {
    if (componentes.includes(precio.componente)) {
      total += precio.precio;
    }
    return total;
  }, 0);
};
const cantidadVentasComponente = (componentes) => {
  return local.ventas.reduce((total, venta) => {
    if (venta.componentes.includes(componentes)) {
      total++;
    }
    return total;
  }, 0);
};

const obtenerVentasPorMes = (mes, anio) => {
  return local.ventas.filter((venta) => {
    return (
      venta.fecha.getMonth() == mes - 1 && venta.fecha.getFullYear() == anio
    );
  });
};

const vendedoraDelMes = (mes, anio) => {
  const ventasPorFecha = obtenerVentasPorMes(mes, anio);

  const ventasPorVendedora = ventasPorFecha.reduce(
    (vendedoras, { nombreVendedora: nombre, componentes }) => {
      if (vendedoras[nombre]) {
        vendedoras[nombre] += precioMaquina(componentes);
      } else {
        vendedoras[nombre] = precioMaquina(componentes);
      }

      return vendedoras;
    },
    {}
  );
  return mayorDeUnObjeto(ventasPorVendedora);
};

// {"ada":¨620,"grace":¨300}
const mayorDeUnObjeto = (objeto) => {
  //[620,300]
  const valores = Object.values(objeto);
  //0
  const indice = valores.indexOf(Math.max(...valores));
  // [ada,grace][0]

  return Object.keys(objeto)[indice];
};

const ventasMes = (mes, anio) => {
  const ventasPorFecha = obtenerVentasPorMes(mes, anio);

  return ventasPorFecha.reduce((totalVentas, venta) => {
    totalVentas += venta.componentes.reduce((totalComponentes, componente) => {
      totalComponentes += precioMaquina(componente);
      return totalComponentes;
    }, 0);
    return totalVentas;
  }, 0);
};

const ventasVendedora = (nombre) => {
  return local.ventas.reduce((totalVentas, venta) => {
    if (venta.nombreVendedora === nombre) {
      totalVentas += venta.componentes.reduce(
        (totalComponentes, componente) => {
          totalComponentes += precioMaquina(componente);
          return totalComponentes;
        },
        0
      );
    }
    return totalVentas;
  }, 0);
};

const componenteMasVendido = () => {
  return local.ventas.reduce((nombreComponente, venta) => {
    const cantidadPorComponent = venta.componentes.reduce(
      (acumulador, componente) => {
        acumulador[componente] = cantidadVentasComponente(componente);
        return acumulador;
      },
      {}
    );

    nombreComponente = mayorDeUnObjeto(cantidadPorComponent);

    return nombreComponente;
  }, "");
};

const huboVentas = (mes, anio) => {
  const ventasPorMes = obtenerVentasPorMes(mes, anio);

  return ventasPorMes.length > 0;
};

const ventasSucursal = (sucursal) => {
  /// 1 - 0
  // 2 - 1
  // 3-2
  // 4 - 2
  return local.ventas.reduce((ventasTotatles, venta) => {
    if (venta.sucursal == sucursal) {
      ventasTotatles += precioMaquina(venta.componentes);
    }
    return ventasTotatles;
  }, 0);
};
const sucursalDelMes = (mes, anio) => {
  const ventasPorFecha = obtenerVentasPorMes(mes, anio);
  // yo tengo la ventas de una fecha
  // quiero que esten surcusal y cuanto vendieron
  // primero tengo el obbjeto vacio

  const ventasPorSurcusal = ventasPorFecha.reduce(
    (totalVentas, venta, indice) => {
      console.log("vuelta", indice);
      console.log("totalVentas", totalVentas);
      console.log("valor Local", totalVentas[venta.sucursal]);
      console.log("venta", venta);
      console.warn("++++++++++++++++++++++++++++++++++++");
      if (totalVentas[venta.sucursal]) {
        totalVentas[venta.sucursal] += precioMaquina(venta.componentes);
      } else {
        totalVentas[venta.sucursal] = precioMaquina(venta.componentes);
      }
      console.log("totalVentas ", totalVentas);
      console.warn("++++++++++++++++++++++++++++++++++++");
      return totalVentas;
    },
    {}
  );

  return mayorDeUnObjeto(ventasPorSurcusal);
};
