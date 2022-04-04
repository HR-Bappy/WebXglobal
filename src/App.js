import React, { useState } from "react";
import "./assets/css/page.css";
import { products } from "./helpers/Data/data";
import preLoader from "./assets/images/preloader.gif";
import { ToastContainer } from "react-toastify";
import { notification } from "./helpers/Confirm/ConfirmAction";
function App() {
  const [preloader, setPreloader] = useState(false);
  const [productCard, setProductCard] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState()
  const [totalCount, setTotalCount] = useState()
  const [invoiceFlag, setInvoiceFlag] = useState(false)
  let date = new Date();
  date = date.toString();
  date = date.substr(0, 15)
  function preLoaderFun() {
    setPreloader(true)
    setTimeout(function () {
      setPreloader(false)
    }, 500)
  }

  function addProductFun(item) {
    preLoaderFun();
    let temp = [...productCard]
    temp.push(item)
    setProductCard(temp)
    setAllProduct(temp)
    let amount = 0
    temp.map((item) => {
      amount += item.price
    })
    setTotalAmount(amount)
    setTotalCount(temp.length)
  }
  function deleteItemFun(key) {
    let temp = [...productCard]
    temp = temp.filter((item, index) => index !== key)
    setProductCard(temp)
    setAllProduct(temp)
    setTotalCount(temp.length)
    let amount = 0
    temp.map((item) => {
      amount += item.price
    })
    setTotalAmount(amount)
  }
  function orderFun() {
    notification('success', 'The Order is Saved Successfully')
    setProductCard([])
    setAllProduct([])
    setTotalCount(0)
    setTotalAmount(0)
  }

  function suspendFun() {
    notification('warning', 'Suspend button clicked')
  }
  function cancelFun() {
    notification('fail', 'Cancel button clicked')
  }
  function onSubmitPaymentFun() {
    notification('success', 'Payment button clicked')
  }
  function billFun() {
    notification('success', 'Bill button clicked')
  }

  function setSearchFun(value) {
    let l = value.length
    let temp = allProduct
    let tempFilter = []
    temp.map((item) => {
      let name = item.name
      let id = item.productId
      for (let i = 0; i < name.length - l + 1; i++) {
        if (name.substr(i, l).toLowerCase() === value.toLowerCase() || id.substr(i, l).toLowerCase() === value.toLowerCase()) {
          tempFilter.push(item)
          break;
        }
      }
    })
    setTimeout(function () {
      setProductCard(tempFilter)
    }, 1000)
  }

  function showInvoiceFun() {
    setInvoiceFlag(true)
  }
  return (
    <section id="home-page">
      <ToastContainer></ToastContainer>
      {preloader ? (
        <div className="preloader">
          <img src={preLoader} alt="preloader" />
        </div>
      ) : null}

      <div className="content">
        <div className="left">
          <div className="row">
            <div class="select-dropdown">
              <select>
                <option value="Option 1">Walk-in Customer</option>
                <option value="Option 2">2nd Option</option>
                <option value="Option 3">3rd Option</option>
              </select>
            </div>
            <button className="btn filter-btn">
              <svg viewBox="0 0 512 512">
                <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
              </svg>
            </button>
            <button className="btn filter-btn" onClick={showInvoiceFun}>
              <svg viewBox="0 0 576 512">
                <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
              </svg>
            </button>
            <button className="btn filter-btn">
              <svg viewBox="0 0 512 512">
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
              </svg>
            </button>
          </div>
          <div className="row m-t-10">
            <div class="select-dropdown w-100">
              <select>
                <option value="Option 1">Warehouse 1</option>
                <option value="Option 2">Warehouse 2</option>
                <option value="Option 3">Warehouse 3</option>
              </select>
            </div>
          </div>
          <div className="row m-t-10">
            <input
              id="search"
              type="text"
              placeholder="Scan/Search product by name/code"
              name="search"
              onChange={(e) => setSearchFun(e.target.value)}
            />
            <button className="btn filter-btn">
              <svg viewBox="0 0 512 512">
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
              </svg>
            </button>
          </div>
          <div className="table m-t-10">
            <table>
              <tr className="table-head">
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>
                  <svg viewBox="0 0 448 512">
                    <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
                  </svg>
                </th>
              </tr>
              {
                productCard && productCard.length ?
                  productCard.map((item, key) => {
                    return (
                      <tr>
                        <td>{item.productId}-{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <input id="quantity" type="number" defaultValue={1}
                            //  onChange={(e) => { setQuantityFun(e.target.value,key) }} 
                            min="1" />
                        </td>
                        <td>{item.price}</td>
                        <td className="btn" onClick={() => { deleteItemFun(key) }}>
                          <svg viewBox="0 0 320 512">
                            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                          </svg>
                        </td>
                      </tr>
                    )
                  })
                  : null
              }

            </table>
          </div>
          <div className="left-bottom m-t-10">
            <div className="summery">
              <p>
                Items <span>{totalCount} ({totalCount}.00)</span>
              </p>
              <p>
                Total <span>{totalAmount}.00</span>
              </p>
            </div>
            <div className="summery">
              <p>
                Order Tax
                <svg viewBox="0 0 512 512">
                  <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
                </svg>
                <span>0.00</span>
              </p>
              <p>
                Discount
                <svg viewBox="0 0 512 512">
                  <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
                </svg>
                <span>(0.00) 0.00</span>
              </p>
            </div>
            <div className="payable">
              <p>
                Total Payable
                <svg viewBox="0 0 448 512">
                  <path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" />
                </svg>
                <span>{totalAmount}.00</span>
              </p>
            </div>
            <div className="btn-group">
              <div className="col">
                <button className="btn suspend" onClick={suspendFun}>Suspend</button>
                <button className="btn cancel" onClick={cancelFun}>Cancel</button>
              </div>
              <div className="col">
                <button className="btn order" onClick={orderFun}>Order</button>
                <button className="btn bill" onClick={billFun}>Bill</button>
              </div>
              <div className="col">
                <button onClick={onSubmitPaymentFun} className="btn payment">
                  <svg viewBox="0 0 576 512">
                    <path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z" />
                  </svg>
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            {products.map((item, key) => {
              return (
                <button
                  className="product-list btn"
                  onClick={() => {
                    addProductFun(item);
                  }}
                >
                  <img src={item.image} />
                  <p>{item.name}</p>
                </button>
              );
            })}
          </div>
          <div className="bottom">
            <button className="btn">&#60;</button>
            <button className="btn">
              <svg viewBox="0 0 576 512"><path d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z" /></svg>
              Sell Gift Card
            </button>
            <button className="btn">&#62;</button>
          </div>
        </div>
      </div>
      {
        invoiceFlag ?
          <div className="invoice-sec">
            <div className="invoice">
              <button className="close-btn btn" onClick={() => setInvoiceFlag(false)}>x</button>

              {
                productCard && productCard.length ?
                  <>
                    <div className="top">
                      <h1>INVOICE</h1>
                      <div>
                        <p>+8801 9977 66489</p>
                        <p>mdhabiburrb@gmail.com</p>
                      </div>
                      <div>
                        <p>Address</p>
                        <p>City, State, Country</p>
                        <p>ZIP CODE</p>
                      </div>
                    </div>
                    <div className="bill-info">
                      <div>
                        <p className="txt-light">Billed To</p>
                        <p>Habibur Rahman</p>
                        <p>Address</p>
                        <p>City, State, Country</p>
                        <p>ZIP CODE</p>
                      </div>
                      <div>
                        <p className="txt-light">Invoice Number</p>
                        <p>9247563268</p>
                        <p className="txt-light m-t-30">Date Of Issue</p>
                        <p>{date}</p>
                      </div>
                      <div>
                        <p className="txt-light">Invoice Total</p>
                        <h2>${totalAmount}.00</h2>
                      </div>
                    </div>
                    <div className="invoice-table">
                      <table>
                        <tr className="table-head">
                          <th>SL#</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                        </tr>
                        {
                          productCard && productCard.length ?
                            productCard.map((item, key) => {
                              return (
                                <tr>
                                  <td>{key + 1}</td>
                                  <td>{item.productId}-{item.name}</td>
                                  <td>{item.price}</td>
                                  <td>1</td>
                                  <td>{item.price}</td>

                                </tr>
                              )
                            })
                            : null
                        }

                      </table>
                    </div>
                    <div className="bottom">
                      <div className="f-right">
                        <p className="txt-color">Subtotal</p>
                        <p>${totalAmount}.00</p>
                      </div>
                      <div className="f-right">
                        <p className="txt-color">Tax</p>
                        <p>$0.00</p>
                      </div>
                      <div className="f-right">
                        <p className="txt-color">Total</p>
                        <p>${totalAmount}.00</p>
                      </div>
                      <div className="invoice-footer">
                        <div>
                          <p className="txt-light">Invoice Terms</p>
                          <p>Ex. Please pay your invoice by...</p>
                        </div>
                        <div className="f-right">
                          <p className="txt-color">Amount Due (USD)</p>
                          <p>${totalAmount}.00</p>
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  <div className="ptb-50">
                    <h2 >
                      The card is empty !!!!
                    </h2>
                      <h4>
                        Please add some items.
                      </h4>
                  </div>
              }

            </div>
          </div>
          : null
      }

    </section>
  );
}

export default App;
