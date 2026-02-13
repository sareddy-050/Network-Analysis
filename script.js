const routeSelect = document.getElementById("route");
  const viaSelect = document.getElementById("via");
  const viaContainer = viaSelect.closest(".mb-3");

  routeSelect.addEventListener("change", function () {
    if (this.value === "Quickest route") {
      viaSelect.value = "";
      viaSelect.disabled = true;
      viaContainer.style.display = "none";
    } else if (this.value === "Shortest route") {
      viaSelect.disabled = false;
      viaContainer.style.display = "block";
    } else {
      viaSelect.value = "";
      viaSelect.disabled = true;
      viaContainer.style.display = "none";
    }
  });
  viaSelect.disabled = true;
  viaContainer.style.display = "none";
function updateViaOptions() {
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const viaSelect = document.getElementById('via');


// write via options only

  if (origin === 'BUSTAND' && destination === 'RGM') {
    viaOptions = ['BOMMALASATRAM', 'POGAKU COMPANY'];
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'BUSTAND') {
    viaOptions = ['SAMKALVA', 'POGAKU COMPANY', 'SAIBABA NAGAR'];
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'BUSTAND') {
    viaOptions = ['BYMALL STREET', 'SANJEEV NAGAR'];
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'RAILWAYSTATION') {
    viaOptions = ['TEKKE', 'SANJEEV NAGAR'];
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'SRINIVAS CENTER') {
    viaOptions = ['SANJEEV NAGAR', ];
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'PADMAVATHINAGAR') {
    viaOptions = ['MUNCIPAL OFFICE'];
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'ATHMAKUR BUSTAND') {
    viaOptions = ['SANJEEV NAGAR'];
  }
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'RGM') {
    viaOptions = ['POGAKU COMPANY', 'BOMMALASATRAM'];
  }
   
  else if (origin === 'BUSTAND' && destination === 'NUNEPALLI ROAD') {
    viaOptions = ['BOMMALASATRAM', 'SRINIVAS CENTER' ];
  } 
  else if (origin === 'BUSTAND' && destination === 'PADMAVATHINAGAR') {
    viaOptions = ['MUNCIPAL OFFICE' ];
  } 
  else if (origin === 'BUSTAND' && destination === 'ATHMAKUR BUSTAND') {
    viaOptions = ['MARKET YARD', 'SANJEEV NAGAR'];
  }
  else if (origin === 'BUSTAND' && destination === 'SRINIVAS CENTER') {
    viaOptions = ['MARKET YARD', 'SANJEEV NAGAR'];
  }
  else if (origin === 'BUSTAND' && destination === 'RAILWAYSTATION') {
    viaOptions = ['BOMMALASATRAM', 'SAMKALVA'];
  }
  else if (origin === 'RAILWAYSTATION' && destination === 'PADMAVATHINAGAR') {
    viaOptions = ['SANJEEV NAGAR'];
  }
  else if (origin === 'RAILWAYSTATION' && destination === 'RGM') {
    viaOptions = ['BOMMALASATRAM', 'POGAKU COMPANY'];
  }
  else if (origin === 'BUSTAND' && destination === 'COLLECTOROFFICE') {
    viaOptions = ['SRINIVAS CENTER'];
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'RAILWAYSTATION') {
    viaOptions = ['SAMKALVA', 'TEKKE'];
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'PADMAVATHINAGAR') {
    viaOptions = ['SRINIVAS CENTER', 'SRINIVAS NAGAR'];
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'RGM') {
    viaOptions = ['BOMMALASATRAM', 'POGAKU COMPANY'];
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'ATHMAKUR BUSTAND') {
    viaOptions = ['BUSTAND', 'SRINIVAS CENTER'];
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'COLLECTOROFFICE') {
    viaOptions = ['RAILWAYSTATION', 'TEKKE'];
  }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'NUNEPALLI ROAD') {
    viaOptions = ['PADMAVATHINAGAR', 'BOMMALASATRAM'];
  }
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'SRINIVAS CENTER') {
    viaOptions = ['HYDER HOSPITAL', 'SANJEEV NAGAR'];
  }
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'ATHMAKUR BUSTAND') {
    viaOptions = ['GV MALL', 'SANJEEV NAGAR'];
  }
  else if (origin === 'NUNEPALLI ROAD' && destination === 'MUNCIPAL OFFICE') {
    viaOptions = ['HYDER HOSPITAL', 'BOMMALASATRAM'];
  }
  else if (origin === 'NUNEPALLI ROAD' && destination === 'BUSTAND') {
    viaOptions = ['BYMALL STREET', 'BOMMALASATRAM'];
  }
  else if (origin === 'NUNEPALLI ROAD' && destination === 'SANJEEV NAGAR') {
    viaOptions = ['SRINIVAS CENTER', 'BOMMALASATRAM'];
  }
  else if (origin === 'RAILWAYSTATION' && destination === 'NUNEPALLI ROAD') {
    viaOptions = ['SAI CLINIC', 'UDAYAN HOSPITAL'];
  }
  else if (origin === 'RGM' && destination === 'RAILWAYSTATION') {
    viaOptions = ['BOMMALASATRAM', 'SAMKALVA'];
  }
  else if (origin === 'RGM' && destination === 'ATHMAKUR BUSTAND') {
    viaOptions = ['COLLECTOR OFFICE', 'SANJEEV NAGAR'];
  }
  else if (origin === 'RGM' && destination === 'SANJEEV NAGAR') {
    viaOptions = ['POGAKU COMPANY', 'BOMMALASATRAM'];
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'NUNEPALLI ROAD') {
    viaOptions = ['RAILWAYSTATION', 'SRINIVAS CENTER'];
  }
  else if (origin === 'SRINIVAS CENTER' && destination === 'BUSTAND') {
    viaOptions = ['BYMALL STREET', 'SANJEEV NAGAR'];
  }
 
   else if (origin === 'SRINIVAS CENTER' && destination === 'RGM') {
    viaOptions = ['BOMMALASATRAM', 'POGAKU COMPANY'];
  }




  viaOptions.forEach(via => {
    const option = document.createElement('option');
    option.textContent = via;
    viaSelect.appendChild(option);
  });
}



function showMap() {
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const via = document.getElementById('via').value;
  const route = document.getElementById('route').value;

  let page = '';
    // shortest route 
  if (origin === 'RAILWAYSTATION' && destination === 'BUSTAND' && via === 'SAMKALVA'&& route == 'Shortest route') {
    page = 'railwaystation to bus station .html';
  } 
  else if (origin === 'BUSTAND' && destination === 'NUNEPALLI ROAD' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'BUSTAND TO NUNEPALLI ROAD VIA BOMMALASATHRAM.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'bustand to bommalasathram.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'bustand to sanjeev nagar.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'BUSTAND TO MUNICIPLITY OFFICE.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'NUNEPALLI ROAD' && via === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'BUSTAND TO NUNEPALLI ROAD VIA SRINIVAS CENTER.html';
  } 
  else if (origin === 'PADMAVATHINAGAR' && destination === 'BUSTAND'&& route == 'Shortest route') {
    page = 'padmavathinagar to bustand.html';
  } 
  else if (origin === 'PADMAVATHINAGAR' && destination === 'RAILWAYSTATION'&& route == 'Shortest route') {
    page = 'padmavathinagar to railwaystation.html';
  } 
  else if (origin === 'PADMAVATHINAGAR' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'padamavathinagar to bommalastram.html';
  } 
  else if (origin === 'PADMAVATHINAGAR' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'padamavathinagar to sanjeev nagar.html';
  } 
  else if (origin === 'PADMAVATHINAGAR' && destination === 'NUNEPALLI ROAD'&& route == 'Shortest route') {
    page = 'padamavathinagar to nunepalli road.html';
  } 
  else if (origin === 'PADMAVATHINAGAR' && destination === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'padamavathinagar to srinivas centre.html';
  }
  else if (origin === 'PADMAVATHINAGAR' && destination === 'RGM'&& route == 'Shortest route') {
    page = 'padamavathinagar to rgm.html';
  }
  else if (origin === 'PADMAVATHINAGAR' && destination === 'ATHMAKUR BUSTAND'&& route == 'Shortest route') {
    page = 'padamavathinagar to atmakurbustand.html';
  }
  else if (origin === 'PADMAVATHINAGAR' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'padamavathinagar to municiplityoffice.html';
  }
   else if (origin === 'BOMMALASATRAM' && destination === 'SRINIVAS CENTER' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'bommalasatram to srinivas centre via sanjeev nagar .html';
  } 
  else if (origin === 'BOMMALASATRAM' && destination === 'BOMMALASATRAM' && via === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'bommalasatram to padmavathi nagar via municipility office.html';
  } 
  else if (origin === 'BOMMALASATRAM' && destination === 'ATHMAKUR BUSTAND' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'bommalasatram to atmakurbustand via sanjeevnagar gate.html';
  } 
  else if (origin === 'BOMMALASATRAM' && destination === 'RGM'&& route == 'Shortest route') {
    page = 'bommalasatraam to rgm.html';
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'bommalastram to municiplity office.html';
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'bommalasatram to sanjeev nagar .html';
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'BUSTAND'&& route == 'Shortest route') {
    page = 'bommalastharm to bus stand.html';
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'RAILWAYSTATION'&& route == 'Shortest route') {
    page = 'bommalasatram to railwaystation.html';
  }
  else if (origin === 'BOMMALASATRAM' && destination === 'NUNEPALLI ROAD'&& route == 'Shortest route') {
    page = 'bommalasatram to nunepalliroadl.html';
  }
   
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'RGM' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'municiplity office to rgm bommalasatram.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'RGM' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'municiplity office to RGM via pogaku company.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'NUNEPALLI ROAD' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'municiplity office to nunepalli road via bommalasatram.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'NUNEPALLI ROAD' && via === 'PADMAVATHINAGAR'&& route == 'Shortest route') {
    page = 'municiplity office to nunepalli road via padamavathi nagar .html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'SRINIVAS CENTER' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'municiplity office to srinivas center via sanjeevnagar gate.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'SRINIVAS CENTER' && via === 'HYDER HOSPITAL'&& route == 'Shortest route') {
    page = 'municiplity office to srinivas center via hyder hospital.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'ATHMAKUR BUSTAND' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'municiplity office to atmakur bustand via sanjeev nagar gate.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'ATHMAKUR BUSTAND' && via === 'GV MALL'&& route == 'Shortest route') {
    page = 'municiplity office to atmakur bustand via gv mall.html';
  } 
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'BUSTAND'&& route == 'Shortest route') {
    page = 'municiplity office to bustand.html';
  }
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'RAILWAYSTATION'&& route == 'Shortest route') {
    page = 'municiplity office to railwaystation .html';
  }
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'municiplity office to sanjeevnagar gate.html';
  }
  else if (origin === 'MUNCIPAL OFFICE' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'municiplity office to bommalasatram.html';
  }
 
  


    //quickest route 
   

   
  else if (origin === 'BUSTAND' && destination === 'RGM' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'bustand to rgm via bommalasathram.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'ATHMAKUR BUSTAND' && via === 'MARKET YARD'&& route == 'Shortest route') {
    page = 'bustand to athmaku bustand via market yard.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'ATHMAKUR BUSTAND' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'bustand to athmakur bustand via sanjeev nagar.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'RGM' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'bustand to rgm via pogakucompany.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'BUSTAND' && via === 'SAIBABA NAGAR'&& route == 'Shortest route') {
    page = 'raiwaystation to busstation via saibabanagar.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'BUSTAND' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'raiwaystation to busstation via pogaku company.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'PADMAVATHINAGAR' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'railwaystation to padmavathinagar via sanjeevnagargate.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'railwaystation to srinivascenter.html';
  } 
  
  else if (origin === 'RAILWAYSTATION' && destination === 'ATHMAKUR BUSTAND'&& route == 'Shortest route') {
    page = 'raiwaystation to athmakur busstaop.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'RGM' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'railwaystation torgm via bommalastram.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'RGM' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'raiwaystation to rgm via pogakucompany.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'RAILWAYSTATION' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'bustand to railway station via bommalasathram.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'RAILWAYSTATION' && via === 'SAMKALVA'&& route == 'Shortest route') {
    page = 'bustand to railway station via samkalva.html';
  } 
  else if (origin === 'BUSTAND' && destination === 'PADMAVATHINAGAR'&& route == 'Shortest route') {
    page = 'bustand to padmavathi .html';
  }
  else if (origin === 'BUSTAND' && destination === 'SRINIVAS CENTER' && via === 'MARKET YARD'&& route == 'Shortest route' ) {
    page = 'bustand to srinivas centre via marketyard.html';
  }
  else if (origin === 'BUSTAND' && destination === 'SRINIVAS CENTER' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'bustand to srinivas centre via sanjeev nagar.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'RAILWAYSTATION' && via === 'SAMKALVA'&& route == 'Shortest route') {
    page = 'sanjeevnagar to railwaystation via samkalva.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'RAILWAYSTATION' && via === 'TEKKE'&& route == 'Shortest route') {
    page = 'sanjeevnagar to railwaystation via tekke.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'PADMAVATHINAGAR' && via === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'sanjeevnagar to padmavathinagar via srinivas centrel.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'PADMAVATHINAGAR' && via === 'SRINIVAS NAGAR ' && route == 'Shortest route') {
    page = 'sanjeevnagar to padmavathinagar via srinivas nagar.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'RGM' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'sanjeevnagargate to rgm via bommalasatharam.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'RGM' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'sanjeevnagargate to rgm via pogaku company.txt.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'ATHMAKUR BUSTAND' && via === 'BUSTAND'&& route == 'Shortest route') {
    page = 'sanjeevnagar to athmakurbustand via bustandl.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'ATHMAKUR BUSTAND' && via === 'SRINIVAS NAGAR'&& route == 'Shortest route') {
    page = 'sanjeevnagar to athmakurbustand via srinivas centre.html';
  }
  else if (origin === 'RAILWAYSTATION' && destination === 'NUNEPALLI ROAD' && via === 'SAI CLINIC'&& route == 'Shortest route') {
    page = 'railwaystation to nunepalli road via sai clinic.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'NUNEPALLI ROAD' && via === 'UDAYAN HOSPITAL'&& route == 'Shortest route') {
    page = 'railwaystation to nunepalli road via udayan hospital.html';
  } 
  else if (origin === 'RAILWAYSTATION' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'railwaystation to bommalasatram.html';
  }
  else if (origin === 'RAILWAYSTATION' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'railwaystation to sanjeev nagargate .html';
  }
  else if (origin === 'RAILWAYSTATION' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'railwaystation to municiplityoffice.html';
  }
  else if (origin === 'NUNEPALLI ROAD' && destination === 'MUNCIPAL OFFICE' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'nunepalli road to municipility offfice via bommalasatharam.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'MUNCIPAL OFFICE' && via === 'HYDER HOSPITAL'&& route == 'Shortest route') {
    page = 'nunepalli  road to municiplity office via hyder hospital.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'BUSTAND' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'nunepalli to bustand via bommalasatharam.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'BUSTAND' && via === 'BYMALL STREET'&& route == 'Shortest route') {
    page = 'nunepalli to bustand via bymall street.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'SANJEEV NAGAR' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'nunepalli to sanjeev nagar gate via bommalasatram.html';
  }
  else if (origin === 'NUNEPALLI ROAD' && destination === 'SANJEEV NAGAR' && via === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'nunepalli to sanjeev nagar gate via srnivas centre.html';
  } 
   
   else if (origin === 'NUNEPALLI ROAD' && destination === 'SRINIVAS CENTER' &&  route == 'Shortest route') {
    page = 'nunepalli to srinivas center.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'RAILWAYSTATION' &&  route == 'Shortest route') {
    page = 'nunepalli to railwaystation.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'PADMAVATHINAGAR' &&  route == 'Shortest route') {
    page = 'nunepalli road to padmavathi nagar .html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'ATHMAKUR BUSTAND' &&  route == 'Shortest route') {
    page = 'nunepalli road to athmakur bustand.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'BOMMALASATRAM' &&  route == 'Shortest route') {
    page = 'nunepalli road to bommalasatram.html';
  } 
   else if (origin === 'NUNEPALLI ROAD' && destination === 'RGM' &&  route == 'Shortest route') {
    page = 'nunepalli to rgm via bommalasatharam.html';
  } 
  else if (origin === 'SRINIVAS CENTER' && destination === 'BUSTAND' && via === 'BYMALL STREET'&& route == 'Shortest route') {
    page = 'srinivas center to bustand via bymall street.html';
  }
  else if (origin === 'SRINIVAS CENTER' && destination === 'BUSTAND' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'srinivas center to bustand via sanjeev nagar gate.html';
  }
  else if (origin === 'SRINIVAS CENTER' && destination === 'RGM' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'srinivas center to rgm via bommalasatram.html';
  } 
  else if (origin === 'SRINIVAS CENTER' && destination === 'RGM' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'srinivas center to rgm via pogaku company.html';
  } 
  else if (origin === 'SRINIVAS CENTER' && destination === 'ATHMAKUR BUSTAND'&& route == 'Shortest route') {
    page = 'srinivas center to atmakur bustand.html';
  }
   else if (origin === 'SRINIVAS CENTER' && destination === 'NUNEPALLI ROAD'&& route == 'Shortest route') {
    page = 'srinivas center to nunepalli road.html';
  }
   else if (origin === 'SRINIVAS CENTER' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'srinivas center to sanjeev nagar.html';
  }
   else if (origin === 'SRINIVAS CENTER' && destination === 'RAILWAYSTATION'&& route == 'Shortest route') {
    page = 'srinivas center to railwaystation.html';
  }
   else if (origin === 'SRINIVAS CENTER' && destination === 'PADMAVATHINAGAR'&& route == 'Shortest route') {
    page = 'srinivas center to bommalasatram.html';
  }
   else if (origin === 'SRINIVAS CENTER' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'srinivas center to municipility office.html';
  }
   else if (origin === 'SRINIVAS CENTER' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'srinivas center to bommalasatram.html';
  }
   else if (origin === 'RGM' && destination === 'SANJEEV NAGAR' && via === 'POGAKU COMPANY'&& route == 'Shortest route') {
    page = 'rgm to sanjeev nagar via  pogaku company.html';
  }
  else if (origin === 'RGM' && destination === 'SANJEEV NAGAR' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'rgm to sanjeevnagar to bommalasatharm.html';
  }
   else if (origin === 'RGM' && destination === 'RAILWAYSTATION' && via === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'rgm to railwaystation via bommalasathram.html';
  }
   else if (origin === 'RGM' && destination === 'RAILWAYSTATION' && via === 'SAMKALVA'&& route == 'Shortest route') {
    page = 'rgm to railwaystation via samkalva.html';
  } 
   else if (origin === 'RGM' && destination === 'ATHMAKUR BUSTAND' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'rgm to athmakur bustop via sanjeevnagar.html';
  } 
  else if (origin === 'RGM' && destination === 'ATHMAKUR BUSTAND' && via === 'COLLECTOR OFFICE'&& route == 'Shortest route') {
    page = 'rgm to athmakur via collector office.html';
  }
   else if (origin === 'RGM' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'rgm to bommalasathram.html';
  }
   else if (origin === 'RGM' && destination === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'rgm to srinivascenter.html';
  }
  else if (origin === 'RGM' && destination === 'NUNEPALLI ROAD'&& route == 'Shortest route') {
    page = 'rgm to nunepalliroad.html';
  }
  else if (origin === 'RGM' && destination === 'PADMAVATHINAGAR'&& route == 'Shortest route') {
    page = 'rgm to padmavathinagar.html';
  }
  else if (origin === 'RGM' && destination === 'BUSTAND'&& route == 'Shortest route') {
    page = 'rgm to bustand.html';
  }
  
  else if (origin === 'RGM' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'rgm to municiliplity office.html';
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'BUSTAND' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'atmakur bustand to bustand via sanjeevnagar gate.html';
  }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'BUSTAND' && via === 'BYMALL STREET'&& route == 'Shortest route') {
    page = 'atmakur bustand to bustand via bymall street.html';
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'RAILWAYSTATION' && via === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'atmakur bustand to railwaystation via sanjeev nagar gate.html';
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'RAILWAYSTATION' && via === 'TEKKE'&& route == 'Shortest route') {
    page = 'atmakur bustand to railwaystation via tekke.html';
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'atmakur bustand to municiplity office.html';
  }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'atmakur bustand to bommalasatram .html';
  }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'RGM'&& route == 'Shortest route') {
    page = 'atmakur bustand to rgm.html';
  }
  else if (origin === 'ATHMAKUR BUSTAND' && destination === 'SANJEEV NAGAR'&& route == 'Shortest route') {
    page = 'atmaku bustand to sanjeev nagar gate .html';
  }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'atmakur bustand to srinivas centre.html';
  }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'PADMAVATHINAGAR'&& route == 'Shortest route') {
    page = 'atmakur bustand to padamavathi nagar.html';
  }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'NUNEPALLI ROAD'&& route == 'Shortest route') {
    page = 'atmakur bustand to nunepalli road.html';
  }
  else if (origin === 'BUSTAND' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'bustand to railwaystationquick.html';
   }
   else if (origin === 'BUSTAND' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'bustand to atmakur bustand 90.html';
   }
   else if (origin === 'BUSTAND' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'bustand to sanjeevnagar quick.html';
   }
   else if (origin === 'BUSTAND' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'bustand to nunepalli road90.html';
   }
   else if (origin === 'BUSTAND' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'bustand to rgm90.html';
   }
   else if (origin === 'BUSTAND' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'bustand to municiplity officeuick.html';
   }
   else if (origin === 'BUSTAND' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'bustand to bommalasatramquick.html';
   }
   else if (origin === 'BUSTAND' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'bustand to padmavathinagar quick.html';
   }
   else if (origin === 'BUSTAND' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'bustand to srinivas centre90.html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'railwaystation tosrinivascenterquick().html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'railwaystation to padmavathinagarquick().html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'railwaystation to bustandquick().html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'railwaystation to bommalastram quick().html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'railwaystation to municiplityoffice quick.html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'railwaystation to rgmquick().html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'railwaystation to nunepalliquick().html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'railwaystation to atmakurbustand quick.html';
   }
   else if (origin === 'RAILWAYSTATION' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'railwaystation to sanjeevnagargatequick().html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'sanjeevnagar to railwaystation quick.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'sanjeevnagargate to athmakur bustand90.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'sanjeevnagargate to nunepalli road90.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'sanjeevnagar to rgm_90.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'sanjeevnagargate to municipility ofice90.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'sanjeevnagargate to bommalastram90.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'sanjeevnagargate to bustandquick.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'sanjeevnagar to padmavathnagarquick.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'sanjeevnagargate to srinivascenter_90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'srinivascenter to sanjeevnagargate90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'srinivas center to padmavathi nagar_files90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'srinivascenter to bustand90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'srinivascenter to bommalasatram90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'srinivascenter to municiplity office90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'srinivasenter to rgm90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'srinivascenter to nunepalli road90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'srinivascenter to atmakurbustand90.html';
   }
   else if (origin === 'SRINIVAS CENTER' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'srinivascenter to railwaystation_files90.html';
   }
   else if (origin === 'RGM' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'rgm to railwaystation90.html';
   }
   else if (origin === 'RGM' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'rgm to srinivas centre90.html';
   }
   else if (origin === 'RGM' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'rgm to atmakurbustand quick91.html';
   }
   else if (origin === 'RGM' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'rgm to nunepali quick91.html';
   }
   else if (origin === 'RGM' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'rgm to municipal office quick91.html';
   }
   else if (origin === 'RGM' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'rgm to bommalastaramquick91.html';
   }
   else if (origin === 'RGM' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'rgm to bustand90.html';
   }
   else if (origin === 'RGM' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'rgm topadmaathinagar quick91.html';
   }
   else if (origin === 'RGM' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'rgm to sanjeev nagar90.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'bommalastram to bustand quick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'bommalastram tosanjeevnagarquick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'bommalastram to municipalofficequick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'bommalastram to nunepalliquick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'bommalastram toatmakurbustandquick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'bommalastram tosrinivascenterquick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'bommalastram to railwaystationquick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'bommalastram to rgm quick.html';
   }
   else if (origin === 'BOMMALASATRAM' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'bommalastram to padamavathinagarquick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'nunepalliroad tobommalastramquick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'nunepalliroad to padmavathinagarquickl.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'nunepalliroad to rgmquick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'nunepalliroad to srinivascenterquick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'nunepalliroad to municipaloffice quick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'nunepalliroad to sanjeevnagarquick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'nunepalliroad to bustandquick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'nunepalliroad toatmakurbustnd to quick.html';
   }
   else if (origin === 'NUNEPALLI ROAD' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'nunepalliroad to railwaystationquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'municipaloffice tonunepalliquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'municipaloffice to railwaystationquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'municipaloffice to atmakurbustandquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'municipaloffice to bustandquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'municipaloffice to sanjeevnagarquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'municipaloffice to srinivascenterquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'municipaloffice to rgmquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'municipaloffice to padamavathinagarquick.html';
   }
   else if (origin === 'MUNCIPAL OFFICE' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'municipaloffice to bommalastramquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'atmakurbustand to municipalofficequick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'atmakurbustand to bommalastramquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'PADMAVATHINAGAR'&& route == 'Quickest route') {
   page = 'atmakurbustand topadamavathinagarquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'atmakurbustand to rgmquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'atmakurbustand to srinivascenterquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'atmakurbustand to sanjeevnagarquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'atmakurbustand to bustandquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'atmakurbustand torailwaystationquick.html';
   }
   else if (origin === 'ATHMAKUR BUSTAND' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'atmakurbustand tonunepalliquick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'ATHMAKUR BUSTAND'&& route == 'Quickest route') {
   page = 'padamavathinagar toatmakurbustand quick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'NUNEPALLI ROAD'&& route == 'Quickest route') {
   page = 'padamavathinagar to nunepalliquick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'RAILWAYSTATION'&& route == 'Quickest route') {
   page = 'padamavathinagar torailwaystationquickl.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'BUSTAND'&& route == 'Quickest route') {
   page = 'padamavathinagar tobustand quick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'SANJEEV NAGAR'&& route == 'Quickest route') {
   page = 'padmaathinagar to sanjevnagar quick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'SRINIVAS CENTER'&& route == 'Quickest route') {
   page = 'padamavathinagar to srinivascenter quick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'RGM'&& route == 'Quickest route') {
   page = 'padamavathinagar to rgmquick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'BOMMALASATRAM'&& route == 'Quickest route') {
   page = 'padamavathinagar to bommalastram quick.html';
   }
   else if (origin === 'PADMAVATHINAGAR' && destination === 'MUNCIPAL OFFICE'&& route == 'Quickest route') {
   page = 'padamavathinagar to municipalofficequick.html';
   }
   else if (origin === 'SANJEEV NAGAR' && destination === 'NUNEPALLI ROAD' && via === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'sanjeevnagar to nunepalliroad via srinivas roadl.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'NUNEPALLI ROAD' && via === 'RAILWAYSTATION'&& route == 'Shortest route') {
    page = 'sanjeev nagar to nunepalli via railwaystation.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'BUSTAND'&& route == 'Shortest route') {
    page = 'sanjeevnagar to bustand.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'MUNCIPAL OFFICE'&& route == 'Shortest route') {
    page = 'sanjeevnagar to municipilityoffice.html';
  }
  else if (origin === 'SANJEEV NAGAR' && destination === 'SRINIVAS CENTER'&& route == 'Shortest route') {
    page = 'sanjeevnagar to srinivascentert.html';
  }
   else if (origin === 'SANJEEV NAGAR' && destination === 'BOMMALASATRAM'&& route == 'Shortest route') {
    page = 'sanjeevnagargate to  bommalasatharam  via railwaystation.html';
  }



   
   

   
   

   

  
  
  
  else {
    alert("No map for the selected route.");
    return;
  }

  window.location.href = page;
}
document.getElementById('origin').addEventListener('change', function() {
  const origin = this.value;
  const destination = document.getElementById('destination');
  for (let i = 0; i < destination.options.length; i++) {
    const opt = destination.options[i];
    opt.disabled = (opt.value === origin && origin !== "");
  }
});
