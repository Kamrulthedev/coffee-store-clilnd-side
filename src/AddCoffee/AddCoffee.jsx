

const AddCoffee = () => {


    const handlerAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const userInfo = {name, supplier, category, chef, taste, details, photo}

      

          // send data to the server side
          fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }


    return (
        <div className="w-96 md:w-[600px]  lg:w-[940px] mb-24 p-4 h-full lg:flex lg:justify-center">
            <div>
                <button>Back</button>
            </div>

            <form onSubmit={handlerAddCoffee} className="mt-24 bg-slate-200 form-control">
                <div className="text-center p-4 mt-8">
                    <h1 className=" text-2xl font-semibold">Add New Coffee</h1>
                    <p className="mt-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                </div>
                <div className="lg:flex lg:justify-between">
                    <div className="lg:p-8 p-4 ">

                        <label className="">
                            <div className="label">
                                <span className="label-text  lg:ml-8 " > Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input lg:ml-8  w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text  lg:ml-8 " > Supplier</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input lg:ml-8 w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text  lg:ml-8 " > Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input lg:ml-8 w-80" />
                        </label>


                    </div>
                    {/*  */}
                    <div className="lg:p-8 p-4 ">

                        <label className="">
                            <div className="label">
                                <span className="label-text  lg:ml-8 " > Chef</span>
                            </div>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input  lg:ml-8  w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text  lg:ml-8 " > Taste</span>
                            </div>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input  lg:ml-8  w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text  lg:ml-8 " > Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input  lg:ml-8  w-80" />
                        </label>

                    </div>
                </div>
                <div className="ml-8 -mt-6">
                <label className="">
                            <div className="label">
                                <span className="label-text lg:ml-28 " > Photo</span>
                            </div>
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input lg:ml-28 mb-4 w-3/4 mr-32" />
                        </label>
                        <input  type="submit"value="ADD COFFEE" className="w-3/4 btn btn-ghost border-2 border-lime-600 lg:ml-28 mb-8" />
                        
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;