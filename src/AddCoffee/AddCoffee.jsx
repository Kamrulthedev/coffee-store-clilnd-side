

const AddCoffee = () => {
    return (
        <div className=" w-[940px] mb-24 p-4 h-full flex justify-center">
            <div>
                <button>Back</button>
            </div>

            <form className="mt-24 bg-slate-200 form-control">
                <div className="text-center">
                    <h1 className=" text-2xl font-semibold">Add New Coffee</h1>
                    <p className="mt-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                </div>
                <div className="flex justify-between">
                    <div className="p-8">

                        <label className="">
                            <div className="label">
                                <span className="label-text ml-8" > Name</span>
                            </div>
                            <input type="text" placeholder="Enter coffee name" className="input ml-8 w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text ml-8" > Supplier</span>
                            </div>
                            <input type="text" placeholder="Enter coffee supplier" className="input ml-8 w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text ml-8" > Category</span>
                            </div>
                            <input type="text" placeholder="Enter coffee category" className="input ml-8 w-80" />
                        </label>


                    </div>
                    {/*  */}
                    <div className="p-8">

                        <label className="">
                            <div className="label">
                                <span className="label-text ml-8" > Chef</span>
                            </div>
                            <input type="text" placeholder="Enter coffee chef" className="input ml-8 w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text ml-8" > Taste</span>
                            </div>
                            <input type="text" placeholder="Enter coffee taste" className="input ml-8 w-80" />
                        </label>
                        <label className="">
                            <div className="label">
                                <span className="label-text ml-8" > Details</span>
                            </div>
                            <input type="text" placeholder="Enter coffee details" className="input ml-8 w-80" />
                        </label>

                    </div>
                </div>
                <div className="-mt-6">
                <label className="">
                            <div className="label">
                                <span className="label-text ml-28 " > Photo</span>
                            </div>
                            <input type="text" placeholder="Enter photo URL" className="input ml-28 mb-4 w-3/4 mr-32" />
                        </label>
                        <button className="w-3/4 btn btn-ghost border-2 border-lime-600 ml-28 mb-8">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;