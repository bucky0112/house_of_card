<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <a class="navbar-brand" href="./index.html">Navbar</a>
            <ul
              class="list-unstyled mb-0 ml-md-auto
              d-flex align-items-center justify-content-between
              justify-content-md-end w-100 mt-md-0 mt-4"
            >
              <li class="mr-md-6 mr-3 position-relative custom-step-line">
                <i class="fas fa-check-circle d-md-inline d-block text-center"></i>
                <span class="text-nowrap">Lorem ipsum</span>
              </li>
              <li class="mr-md-6 mr-3 position-relative custom-step-line">
                <i class="fas fa-check-circle d-md-inline d-block text-center"></i>
                <span class="text-nowrap">Lorem ipsum</span>
              </li>
              <li>
                <i class="fas fa-dot-circle d-md-inline d-block text-center"></i>
                <span class="text-nowrap">Lorem ipsum</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="font-weight-bold mb-4 pt-3">確認訂單</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div class="d-flex">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                alt
                class="mr-2"
                style="width: 48px; height: 48px; object-fit: cover"
              />
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">Lorem ipsum</p>
                  <p class="mb-0">NT$12,000</p>
                </div>
                <p class="mb-0 font-weight-bold">x1</p>
              </div>
            </div>
            <div class="d-flex mt-2">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                alt
                class="mr-2"
                style="width: 48px; height: 48px; object-fit: cover"
              />
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">Lorem ipsum</p>
                  <p class="mb-0">NT$12,000</p>
                </div>
                <p class="mb-0 font-weight-bold">x1</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                  <td class="text-right border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">Total</p>
              <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div
                class="card-header bg-white"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p class="mb-0 position-relative custom-checkout-label">Lorem ipsum</p>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body bg-light pl-5">
                  <div class="form-group">
                    <label for="Lorem ipsum1" class="text-muted mb-0">Lorem ipsum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum1"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                  <div class="form-group mb-0">
                    <label for="Lorem ipsum2" class="text-muted mb-0">Lorem ipsum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum2"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div
                class="card-header bg-white collapsed"
                id="headingTwo"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <p class="mb-0 position-relative custom-checkout-label">Lorem ipsum</p>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body bg-light pl-5">
                  <div class="form-group">
                    <label for="Lorem ipsum1" class="text-muted mb-0">Lorem ipsum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum1"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                  <div class="form-group mb-0">
                    <label for="Lorem ipsum2" class="text-muted mb-0">Lorem ipsum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum2"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div
                class="card-header bg-white collapsed"
                id="headingThree"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                <p class="mb-0 position-relative custom-checkout-label">Lorem ipsum</p>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body bg-light pl-5">
                  <div class="form-group">
                    <label for="Lorem ipsum1" class="text-muted mb-0">Lorem ipsum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum1"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                  <div class="form-group mb-0">
                    <label for="Lorem ipsum2" class="text-muted mb-0">Lorem ipsum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum2"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column-reverse flex-md-row
            mt-4 justify-content-between align-items-md-center align-items-end"
          >
            <a href="./product.html" class="text-dark mt-md-0 mt-3">
              <i class="fas fa-chevron-left mr-2"></i> Lorem ipsum
            </a>
            <a href="./checkout-success.html" class="btn btn-dark py-3 px-7">Lorem ipsum</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
