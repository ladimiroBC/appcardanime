import { InformationCard } from "../entity/information.card";
import { CrudHttpClient } from "./crud.httpclient";

export interface ApplicationAnimeCardHttpClient extends CrudHttpClient<InformationCard>{ }
