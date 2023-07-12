class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            //  console.log('crud repo : ',data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            // console.log(result);
            return result;
        } catch(error) {
            console.log(error);
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(gymId) {
        try {
            const result = await this.model.find(
                {gymId : gymId}
            );
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch(error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

}

module.exports = CrudRepository;