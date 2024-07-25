import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu"
import { Input } from "@/components/ui/input"

export default function UserLayout() {
  return (
    <header className="sticky w-full bg-blue-800 h-20 flex items-center">
      <MaxWidthWrapper>
        <div className="flex justify-end">

          <Input type="search" className="" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                USER
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Meus projetos</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
