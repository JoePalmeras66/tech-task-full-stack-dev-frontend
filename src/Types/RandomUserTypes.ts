import { 
  createColumnHelper 
} from "@tanstack/react-table";

export type IRandomUser = {
  first: string;
  last: string;
  gender: string;
  email: string;
}

const columnHelper = createColumnHelper<IRandomUser>()

export const columnsRandomUser = [
  columnHelper.accessor('first', {
     header: () =>'First Name',
     cell: info => info.getValue(),
     footer: info => info.column.id,
   }),
   columnHelper.accessor('last', {
     header: () =>'Last Name',
     cell: info => info.renderValue(),
     footer: info => info.column.id,
   }),
   columnHelper.accessor('gender', {
     header: () => 'Gender',
     cell: info => info.renderValue(),
     footer: info => info.column.id,
   }),
   columnHelper.accessor('email', {
     header: () => 'E-Mail',
     cell: info => info.renderValue(),
     footer: info => info.column.id,
   }),
 ]