import axios from '@/plugin/axios'
import BaseServices from '@/services/BaseServices'
import MovieServices from '@/services/MovieServices'

export const baseServices = new BaseServices(axios)
export const movieServices = new MovieServices(BaseServices)
