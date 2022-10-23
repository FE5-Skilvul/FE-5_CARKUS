import { getIdKampus } from "../lib/getData.js";
import { getThread } from "../lib/getData.js";
import { createThread } from "../utils/createThreads.js";

const params = new URLSearchParams(window.location.search);
const {namaKampus, lokasi, informasi, sosialMedia, fakultas, akreditasi, status, image} = await getIdKampus(params.get('id'))
const dataThread = await getThread(params.get('id'))


document.getElementById('konten').innerHTML =
`<div class="row g-4" id="konten">
                <div class="col-lg-4 border border-1 p-3">
                  <div class="detail text-center">
                        <img src="${image}" style="height:200px ;">
                        <p class="h4 mt-3">${namaKampus}</p>
                        <p>1888 Pengikut</p>
                        <a class="btn btn-primary col-4" role="button"><i class="fa-solid fa-plus"></i> ikuti</a>
                        <p class="h5 mt-4">Sosial Media</p>
                        <a href="${sosialMedia.situs}"><i class="fa-solid fa-earth-americas fa-2xl m-3"></i></a>
                        <a href="${sosialMedia.instagram}"><i class="fa-brands fa-instagram fa-2xl m-3"></i></a>
                    </div>
                </div>
                <div class="col-lg-8" id="main">
                  <div class="row border border-1">
                    <div class="col p-3">
                        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><i class="fa-solid fa-building-user fa-xl me-2"></i>Profile</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="fakultas-tab" data-bs-toggle="tab" data-bs-target="#fakultas-tab-pane" type="button" role="tab" aria-controls="fakultas-tab-pane" aria-selected="true"><i class="fa-solid fa-graduation-cap fa-xl me-2"></i>Fakultas</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="forum-tab" data-bs-toggle="tab" data-bs-target="#forum-tab-pane" type="button" role="tab" aria-controls="forum-tab-pane" aria-selected="false"><i class="fa-solid fa-comments fa-xl me-2"></i>Diskusi</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                <div class="row m-2">
                                    <div class="col-12">
                                        <div class="short-detail border p-3 mb-3">
                                            <p class="h3">${namaKampus}</p>
                                            <p class="text-muted">${lokasi}</p>
                                            <div class="info d-flex justify-content-evenly">
                                                <p id="akreditas" class="text-muted">Akreditas: <span class="text-black">${akreditasi}</span> </p>
                                                <p id="akreditas" class="text-muted">Tipe: <span class="text-black">${status}</span> </p>
                                            </div>
                                        </div>
                                        <div class="content p-3 border">
                                            <p class="h2">Informasi Umum</p>
                                            <p id="detail" class="lh-2">
                                            ${informasi}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="fakultas-tab-pane" role="tabpanel" aria-labelledby="fakultas-tab" tabindex="0">
                                <div class="row m-2">
                                ${fakultas.map((element) => `<div class="col-lg-6">
                                <div class="short-detail border p-3 mb-3">
                                    <p class="h3">${element.namaFakultas}</p>
                                    <div class="info d-flex justify-content-start">
                                        <p id="akreditas" class="text-muted me-3">Akreditas: <span class="text-black">${element.akreditasi}</span> </p>
                                        <p id="akreditas" class="text-muted">Program Studi: <span class="text-black">${element.programStudi}</span> </p>
                                    </div>
                                </div>
                            </div>`).join('')}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="forum-tab-pane" role="tabpanel" aria-labelledby="forum-tab" tabindex="0">
                                <div class="row m-3" id="navbar-example2">
                                    <div class="col">
                                        <form id="diskusi">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" placeholder="Nama kamu" aria-label="name" aria-describedby="name" name="name" required>
                                                <span class="input-group-text" id="name">Nama</span>
                                            </div>
                                            <textarea class="form-control" aria-label="With textarea" placeholder="Apa yang anda pikirkan?" name="diskusi" required></textarea>
                                            <div class="d-flex justify-content-end align-items-center mt-3">
                                                <i class="fa-solid fa-camera fa-2xl me-2"></i>
                                                <button type="submit" class="btn btn-primary">Unggah</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
                                    <div id="status">
                                    ${dataThread.map((element)=>`
                                        <div class="row border bg-white mb-2">
                                            <div class="col">
                                                <div class="row my-2">
                                                    <div class="col d-flex justify-content-between">
                                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style="height: 70px;" class="p-2" >
                                                        <p id="name" class="h4 p-2">${element.name}</p>
                                                        <p id="date" class="text-muted p-2 ms-auto">${element.createdAt}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col ms-2">
                                                        <p>${element.diskusi} </p>
                                                        <div class="d-flex justify-content-end pb-2 mb-2 me-3">
                                                            <i class="fa-solid fa-thumbs-up fa-xl me-2"></i>
                                                            <i class="fa-solid fa-reply fa-xl"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
`

let form = document.getElementById('diskusi')

form.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    const diskusi = formData.get('diskusi')
    const kampuId = params.get('id')
    
    const thread = await createThread(name, diskusi, kampuId);
    window.location.replace(`/kampus/?id=${kampuId}`);

}
)