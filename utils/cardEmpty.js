export function emptyCard(title, lokasi, urlImage, id){
    return `
    <div class="col-lg-3 mb-4">
          <div class="card mx-auto h-100" style="width: 18rem;">
            <img src="${urlImage}" class="card-img-top" alt="${title}" style="width: auto; height: 250px;">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${lokasi}</p>
            </div>
            <div class="card-footer">
                <a href="kampus/?id=${id}" class="btn btn-primary" id="${id}">Kunjungi</a>
            </div>
          </div>
        </div>
    `
}

