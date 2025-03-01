"use client";

import { usePathname } from "next/navigation";
import { EllipsisVertical, Hourglass, Plus, Users } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Page = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop(); // Récupère uniquement la dernière partie du chemin
  const contacts = [
    {
      id: "C1",
      firstName: "Amine",
      lastName: "Bouhjar",
      phone: "+33 6 12 34 56 78",
      email: "amine.b@example.com",
      company: "Devlly Agency",
      photo: null, // You can put a real image URL here if needed
    },
    {
      id: "C2",
      firstName: "Nadia",
      lastName: "Bensalem",
      phone: "+33 6 98 76 54 32",
      email: "nadia.b@example.com",
      company: "Webify France",
      photo: null,
    },
    {
      id: "C3",
      firstName: "Karim",
      lastName: "Ziani",
      phone: "+33 6 11 22 33 44",
      email: "karim.z@example.com",
      company: "Tech Solutions",
      photo: null,
    },
    {
      id: "C4",
      firstName: "Fatima",
      lastName: "Ouali",
      phone: "+33 6 55 44 33 22",
      email: "fatima.o@example.com",
      company: "Innovatech",
      photo: null,
    },
    {
      id: "C5",
      firstName: "Yassine",
      lastName: "Belkacem",
      phone: "+33 6 77 88 99 00",
      email: "yassine.b@example.com",
      company: "Digital Wave",
      photo: null,
    },
    {
      id: "C6",
      firstName: "Amine",
      lastName: "Bouhjar",
      phone: "+33 6 12 34 56 78",
      email: "amine.b@example.com",
      company: "Devlly Agency",
      photo: null, // You can put a real image URL here if needed
    },
    {
      id: "C7",
      firstName: "Nadia",
      lastName: "Bensalem",
      phone: "+33 6 98 76 54 32",
      email: "nadia.b@example.com",
      company: "Webify France",
      photo: null,
    },
    {
      id: "C8",
      firstName: "Karim",
      lastName: "Ziani",
      phone: "+33 6 11 22 33 44",
      email: "karim.z@example.com",
      company: "Tech Solutions",
      photo: null,
    },
    {
      id: "C9",
      firstName: "Fatima",
      lastName: "Ouali",
      phone: "+33 6 55 44 33 22",
      email: "fatima.o@example.com",
      company: "Innovatech",
      photo: null,
    },
    {
      id: "D1",
      firstName: "Yassine",
      lastName: "Belkacem",
      phone: "+33 6 77 88 99 00",
      email: "yassine.b@example.com",
      company: "Digital Wave",
      photo: null,
    },
    {
      id: "D2",
      firstName: "Amine",
      lastName: "Bouhjar",
      phone: "+33 6 12 34 56 78",
      email: "amine.b@example.com",
      company: "Devlly Agency",
      photo: null, // You can put a real image URL here if needed
    },
    {
      id: "D3",
      firstName: "Nadia",
      lastName: "Bensalem",
      phone: "+33 6 98 76 54 32",
      email: "nadia.b@example.com",
      company: "Webify France",
      photo: null,
    },
    {
      id: "D4",
      firstName: "Karim",
      lastName: "Ziani",
      phone: "+33 6 11 22 33 44",
      email: "karim.z@example.com",
      company: "Tech Solutions",
      photo: null,
    },
    {
      id: "D5",
      firstName: "Fatima",
      lastName: "Ouali",
      phone: "+33 6 55 44 33 22",
      email: "fatima.o@example.com",
      company: "Innovatech",
      photo: null,
    },
    {
      id: "D6",
      firstName: "Yassine",
      lastName: "Belkacem",
      phone: "+33 6 77 88 99 00",
      email: "yassine.b@example.com",
      company: "Digital Wave",
      photo: null,
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 8

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentContacts = contacts.slice(indexOfFirstItem, indexOfLastItem)

  // Total pages
  const totalPages = Math.ceil(contacts.length / itemsPerPage)
  function handlePageChange(page) {
    setCurrentPage(page)
  }
  
  return (
    <div className="flex flex-col items-center justify-start rounded-2xl bg-white h-full w-full p-4 my-4 relative h-[calc(100vh-120px)] overflow-hidden pb-24 ">
     
      {/* header */}
      <div className="flex w-full justify-between items-center py-2 pb-4  border-b-2 ">
         <h4 className="text-2xl font-semibold text-gray-600 "> Touts les Contacts</h4> 
         <div className="flex gap-4">
         <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="bg-primary text-secondary">
              <Plus /> Ajouter
            </Button>
          </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ajouter un contact</DialogTitle>
                <DialogDescription>
                  Remplissez les informations ci-dessous puis cliquez sur enregistrer.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">

                {/* Photo (File Upload) */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="photo" className="text-right">
                    Photo
                  </Label>
                  <Input
                    id="photo"
                    type="file"
                    className="col-span-3"
                  />
                </div>

                {/* Nom */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nom" className="text-right">
                    Nom
                  </Label>
                  <Input
                    id="nom"
                    placeholder="Entrez votre nom"
                    className="col-span-3"
                  />
                </div>

                {/* Prénom */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="prenom" className="text-right">
                    Prénom
                  </Label>
                  <Input
                    id="prenom"
                    placeholder="Entrez votre prénom"
                    className="col-span-3"
                  />
                </div>

                {/* Nom de l’entreprise */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="entreprise" className="text-right">
                    Entreprise
                  </Label>
                  <Input
                    id="entreprise"
                    placeholder="Nom de l’entreprise"
                    className="col-span-3"
                  />
                </div>

                {/* E-mail */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Entrez votre e-mail"
                    className="col-span-3"
                  />
                </div>

                {/* Téléphone */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="telephone" className="text-right">
                    Téléphone
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="Entrez votre numéro"
                    className="col-span-3"
                  />
                </div>

                {/* Description courte */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <textarea
                    id="description"
                    placeholder="Ajoutez une petite description"
                    className="col-span-3 border rounded p-2"
                  />
                </div>

              </div>

              <DialogFooter>
                <Button type="submit">créer un nouveau contact</Button>
              </DialogFooter>
            </DialogContent>
        </Dialog>


         
         <Button variant="outline" className="bg-slate-100 text-primary p-3 hover:bg-primary hover:text-slate-100 "><EllipsisVertical className="p-0 "/></Button>

         </div>
         
      </div>

      {/* body or table  */}
      <div className="flex flex-col w-full items-start  h-full text-center opacity-70">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">ID</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Prénom</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Entreprise</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentContacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">{contact.id}</TableCell>
              <TableCell>
                {contact.photo ? (
                  <img
                    src={contact.photo}
                    alt={`${contact.firstName} ${contact.lastName}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Img</span>
                  </div>
                )}
              </TableCell>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="bg-slate-100 text-primary p-3 hover:bg-primary hover:text-slate-100">
                  <EllipsisVertical className="p-0" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

  <div className="flex justify-end space-x-2 mt-4 w-full">
    <Button
      variant="outline"
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      Précédent
    </Button>
    {[...Array(totalPages)].map((_, i) => (
      <Button
        key={i}
        variant={currentPage === i + 1 ? "default" : "outline"}
        onClick={() => handlePageChange(i + 1)}
      >
        {i + 1}
      </Button>
    ))}
    <Button
      variant="outline"
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
    >
      Suivant
    </Button>
  </div>



    </div>

    </div>
  );
};

export default Page;
