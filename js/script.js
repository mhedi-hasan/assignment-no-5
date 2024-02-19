//
const newButtons = document.getElementById("current-seat");

function modalSection() {
  // console.log('Mehedi Hasan is the best man in bangladesh.')
  // step--1: hide the all section and
  const mainSection = document.getElementById("main-section");
  mainSection.classList.add("hidden");
  // step--2: Show the done section
  const doneSection = document.getElementById("modal");
  doneSection.classList.remove("hidden");
}

function modalHide() {
  const mainSection = document.getElementById("modal");
  mainSection.classList.add("hidden");
  const mainSections = document.getElementById("main-section");
  mainSections.classList.remove("hidden");
}

// apply button function
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const totalSeatBookedText =
      document.getElementById("current-seat").innerText;
    const totalSeatBooked = parseInt(totalSeatBookedText);
    const deleteButton = document.getElementById("apply-button");
    const totalText = document.getElementById("total").innerText;
    const total = parseInt(totalText);
    // 15% Coupon
    console.log("total ", totalSeatBooked);
    if (text === "NEW15" && totalSeatBooked === 4) {
      const totalAfterDiscount = parseInt(total - (total * 15) / 100);
      document.getElementById("grand-total").innerText = totalAfterDiscount;
      deleteButton.removeAttribute("disabled");
    }
    // 20% coupon
    else if (text === "Couple 20" && totalSeatBooked === 4) {
      const totalAfterDiscount = parseInt(total - (total * 20) / 100);
      document.getElementById("grand-total").innerText = totalAfterDiscount;
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });

document
  .getElementById("phone-number")
  .addEventListener("keyup", function (event) {
    const number = event.target.value;
    const text = event.target.value;
    const deleteButtons = document.getElementById("next-button");
    // -----------------------------
    if (number.length === 11) {
      deleteButtons.removeAttribute("disabled");
    } else {
      deleteButtons.setAttribute("disabled", true);
    }
  });

// apply button hidden function
function applyButton() {
  const applyButtonSection = document.getElementById("apply-button");
  applyButtonSection.classList.add("hidden");
}

const buttons = document.getElementsByClassName("clickbtn");
// Add selected Seat Number
const selectedSeats = {};
for (let button of buttons) {
  button.addEventListener("click", function (e) {
    const newButtonsText = newButtons.innerText;
    const newSeats = parseInt(newButtonsText);
    if (newSeats >= 4) {
      // If user booked 4 seat then only added seat can be removed
      if (selectedSeats[e.target.id]) {
        removeSeat(e, newSeats);
        // add false if seat booking cancelled
        selectedSeats[e.target.id] = false;
        // Change Seat Button ackground and text color
        toggleSeatButton(e);
      } else {
        alert("You can book only four seats");
      }
    } else {
      toggleSeatButton(e);
      // Check seat already booked
      if (selectedSeats[e.target.id]) {
        removeSeat(e, newSeats);
        selectedSeats[e.target.id] = false;
      } else {
        addSeat(e, newSeats);
        // add selected seat
        selectedSeats[e.target.id] = true;
      }
    }
  });
}

// Seat Button Background Color change
const toggleSeatButton = function (e) {
  var element = document.getElementById(e.target.id);
  element.classList.toggle("bg-[#1DD100]");
  element.classList.toggle("text-white");
};

// Add seat by click on button
const addSeat = function (e, seatOrderCount) {
  console.log("Added Seat");
  const newButtonValue = seatOrderCount + 1;
  newButtons.innerText = newButtonValue;

  const availableSeat = document.getElementById("available-seat");
  const availableSeatElement = availableSeat.innerText;
  const available = parseInt(availableSeatElement);
  const updateSeat = available - 1;
  // Add seat to table
  addToSeatList(e, newButtonValue);
  // Update total available seat from 40 seats
  availableSeat.innerText = updateSeat;
};

// Remove seat by click on button
const removeSeat = function (e, seatOrderCount) {
  console.log("Remove Seat");
  const newButtonValue = seatOrderCount - 1;
  newButtons.innerText = newButtonValue;

  const availableSeat = document.getElementById("available-seat");
  const availableSeatElement = availableSeat.innerText;
  const available = parseInt(availableSeatElement);
  const updateSeat = available + 1;
  // Remove seat to table
  removeFromSeatList(e);
  // Update total available seat from 40 seats
  availableSeat.innerText = updateSeat;
};

// Add seat to table
const addToSeatList = function (e, newButtonValue) {
  console.log("Seat Added To Table");
  const tbody = document.querySelector("tbody");
  const addNewRow = document.createElement("tr");
  addNewRow.id = `row-${e.target.id}`;
  addNewRow.innerHTML = `
  <td id="table-data" class="py-2">${e.target.id}</td>
    <td>Economy</td>
    <td class="singleSeatPrice text-right">550</td>
  `;
  tbody.appendChild(addNewRow);
  totalPrice();
};

// remove seat from table
const removeFromSeatList = function (e) {
  console.log("Seat Removed From Table");
  const rowToRemove = document.getElementById(`row-${e.target.id}`);
  rowToRemove.remove();
  totalPrice();
};

// Calculate total amount from table
const totalPrice = function () {
  let total = 0;
  const tbody = document.querySelector("tbody");
  // Get all table rows
  const rows = tbody.querySelectorAll("tr");
  for (let i = 0; i < rows.length; i++) {
    const getPrice = rows[i].querySelector(".singleSeatPrice");
    total += parseInt(getPrice.textContent);
  }
  // Update Total
  document.getElementById("total").innerText = total;
  // Update Grand Total
  document.getElementById("grand-total").innerText = total;
};