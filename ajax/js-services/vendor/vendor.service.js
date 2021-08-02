const baseurl= "http://localhost:8080/api/vendors/";

const vendorGetAll = () => {
   return $.getJSON(`${baseurl}`);
}

const vendorGetById = (id) => {
   return $.getJSON(`${baseurl}${id}`);
}

const vendorAdd = (vendor) => {

   return $.ajax({
      method:"POST",
      url: `${baseurl}`,
      data: JSON.stringify(vendor),
      contentType: "application/json"
   });
}

const vendorUpdate = (vendor) => {

   return $.ajax({
      method:"PUT",
      url: `${baseurl}${id}`,
      data: JSON.stringify(vendor),
      contentType: "application/json"
   });
}

const vendorDelete = (id) => {
   return $.ajax({
      method:"Delete",
      url: `${baseurl}${id}`,
   });
}