const dateFormat = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const generarTable = () => {
  const table = document.querySelector("#table");
  table.innerHTML = local.ventas.reduce(
    (html, venta) => {
      return (
        html +
        `
        <tr>
          <td>${dateFormat(venta.fecha)}</td>
          <td>${venta.nombreVendedora}</td>
          <td>${venta.sucursal}</td>
          <td>${venta.componentes.join(" - ")}</td>
          <td>${precioMaquina(venta.componentes)}</td>
          <td><i class="fas fa-trash" onclick="deleteItem(${
            venta.id
          })" style=color:#f44336;></i></td>
        </tr>
        `
      );
    },
    ` <tr>
          <th>Fecha</th>
          <th>Vendedora</th>
          <th>Sucursal</th>
          <th>Componentes</th>
          <th>Precio</th>
        </tr>`
  );
};

const botonCloseDelete = document.getElementById("closeDelete");
const modalContentDelete = document.getElementById("modalContentDelete");
const modalDelete = document.getElementById("modalDelete");
const btnCancelDelete = document.getElementById("btn-cancel-delete");
const btnDelete = document.getElementById("btn-delete");
const hiddenValueDelete = document.getElementById("hiddenValueDelete");

const deleteItem = (id) => {
  modalDelete.classList.replace("fade", "show");
  modalContentDelete.classList.add("active");
  hiddenValueDelete.value = id;
};

btnCancelDelete.addEventListener("click", function () {
  modalDelete.classList.replace("show", "fade");
  modalContentDelete.classList.remove("active");
});
botonCloseDelete.addEventListener("click", function () {
  modalDelete.classList.replace("show", "fade");
  modalContentDelete.classList.remove("active");
});
btnDelete.addEventListener("click", () => {
  local.ventas = local.ventas.filter((venta) => {
    return venta.id !== Number(hiddenValueDelete.value);
  });

  generarTable();
  generarTabletittle();
});

const generarTabletittle = () => {
  const tableContainer = document.querySelector("#table-sucursal");
  tableContainer.innerHTML = local.sucursales.reduce(
    (html, sucursal) => {
      return (
        html +
        ` <tr>
          <td>${sucursal}</td>

          <td>${ventasSucursal(sucursal)}</td>
        </tr>
        `
      );
    },
    `  <tr>
          <th>Sucursal</th>

          <th>Total <br>
            Ventas</th>
        </tr>`
  );
};


const generarTableWrapper = () => {
  const tableWrapper = document.getElementById("table-wraper");
  tableWrapper.innerHTML = 

}

const botonModalContainer = document.getElementById("btn-modal");
const botonClose = document.getElementById("close");
const modalContent = document.getElementById("modalContent");
const modal = document.getElementById("modal");
const btnCancel = document.getElementById("btn-cancel");
const btnAdd = document.getElementById("btn-add");

botonModalContainer.addEventListener("click", function (event) {
  modal.classList.replace("fade", "show");
  modalContent.classList.add("active");
});
botonClose.addEventListener("click", function () {
  modal.classList.replace("show", "fade");
  modalContent.classList.remove("active");
});

btnCancel.addEventListener("click", function () {
  modal.classList.replace("show", "fade");
  modalContent.classList.remove("active");
});

const selectVendedora = document.getElementById("vendedora");
const selectComponentes = document.getElementById("componentes");
const selectSucursal = document.getElementById("sucursal");
btnAdd.addEventListener("click", function () {
  const nombreVendedora =
    selectVendedora.options[selectVendedora.selectedIndex].value;
  const sucursal = selectSucursal.options[selectSucursal.selectedIndex].value;
  const componentes = [...selectComponentes.options]
    .filter((option) => option.selected)
    .map((option) => option.value);
  local.ventas.push({
    id: local.ventas.length,
    fecha: new Date(),
    nombreVendedora,
    sucursal,
    componentes,
  });

  generarTable();
  generarTabletittle();
});

modal.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.classList.replace("show", "fade");
    modalContent.classList.remove("active");
  }
});

generarTable();
generarTabletittle();
