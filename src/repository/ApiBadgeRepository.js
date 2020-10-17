import ApiRepository from "./ApiRepository";

class ApiBadgeRepository extends ApiRepository{
    constructor() {
        super("badges/");
    }

    async findAll(){
        return await super.findAll();
    }

    async findById(id){
        return await super.findById(id);
    }

    async create(badge){
        await super.create(badge);
    }

    async update(id, updates) {
        await super.update(id, updates);
    }

    async remove(id){
        await super.remove(id);
    }

}

export default ApiBadgeRepository;