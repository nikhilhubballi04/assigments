import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const events = [
  {
    img: "data:image/jpeg;base64,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",
    name: "sonu nigam",
    date: "2025-04-15",
    location: "Ahemadabadh",
    price: 20,
  },
  {
    img: "data:image/jpeg;base64,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",
    name: "travis scott",
    date: "2025-04-20",
    location: "Delhi",
    price: 15,
  },
  {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRcVFRUVFRcVFRcVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzIlICYuLi0tLSstLS4tLTArLS8rLS8vLS0tLS0yLS8vLS0tLS0tLS0tKy0tLy0tLy0tLS8tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAABAAIDBAUGB//EAEEQAAICAQMBBgMDCQYFBQAAAAECABEDBBIhMQUTIkFRYQZxkTKBsRQjM0JSYqGy8Adyc4LB0RVDU5LhFkRUk8L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAOBEAAgIBAgQDBgQEBgMAAAAAAAECEQMhMQQSQVFhcYEFEyKRwdEyobHwFDNC4RUjUnKC8QZTYv/aAAwDAQACEQMRAD8A/lwkgDAFYBVACAEADAKAMAYBGAIgBAIQCgEIBQBMAIBQCMAoBCAUAoAiAEAjAAwCMADAEQCgGhAIQAgCDAAwAuAMAhAGAUAGMAyVgDAK4AwCgFcAIBqARgBAKANQAqAIEAIBQCgDUAIAQBgFAK4AXAAi4AwDVwCgFACAEAbgBUAoBCAMAIBEwBuABgBAKAQMAoAiAQMA0DACQCgG8ONmNL8+eAAOpJPAA9ZKV7FZSUVbOtYx1dj7qnh+4swJ+glvhK3N9Pm/sZbHwSjbgOTY2sB6kWRXuCfeo5dLWpKlrTOIlC5QDSwDJMkBACAQgFAKAMAYAGAVwBEAoAQCqAO2ARMAIBQCuAFwCMAbgATAC4AQBAgGhAIwCgCIBpEJNAEk9ABZPyA6yCG0lbPanZ7qu98bn0QA2fVnrlVH1JvkVcKjB5oyfLGXr9vEm1ZGJaTEA7NY7tSCqbdos2ftbj1vgTTmpEe6Tm7b08e5rB2c2UbkQpQ3G7KFPN8ZPJr9mz14PkLRxOeqVESzrG+WTv8AW+z+5wfMcbeHHtI/6i25HPUNwAeeg+89ZHO4PRfM1UVNau/LY1lxguy7OAeGRaIB+zuA4qvYS7ipTca+XQRdRTv5nDLp2XqDXr5e3MyljlHdGq11OcoDJkgIAwAqAZgDAK4Bq4AEwCgFcAbgFAIQDVwDFwAuAVwCgERAKAUAoBQCuAIMAYACAUAVgHr1LbLxrxXDkdXYdQT+yD0HTi+sotdTKC5vjfp4f3LNiJYVQC48Z3HgLaKbv1LFjxySTUcxEZJJ31b09fsfSwhcmPduLZELlT3d7ge6DPtLeNltaJFncTRIlk9TmlzQnVVF1eu29K+if03SOPZ+Fr3WMgfLjRnBLbkbf3itfiH6tggeU2x3fmWzSjVbUm68dK8PkcdFpuCmR/CAS6gbu7oElt3RW46C76EelsUE/hk9Ovh/c0nPXmitenj9a8WY1pLu1HozeCqqibochvrftGa5SaT9P3ua4lUUcXcjYQaO3/8ATAX6igB8pm21TXY0M5gCAwFXYI8gwq69uQfvPpIlW6LPucLlSpQBEAjAMkwCuAVQCMAoBGAUArgFcArgDcAIBQCgDAIiAEAoAwAaAZgGwIAwCqAQgHTC+1lar2sDXrRBqRJWqIatUe3W4UxO2784xJZVshdjeJHcqbO5SrBQRwQSeamUJOcVWhWLbXY9efV42RMLY8SlVRwSXRW7xRk2lg3hIDgBmsdbqZxjK3JN9fy0KLHUnLue1Ph/L3QdcWYLtYVs3vbPiZNjL4XBAcjIPDSc1VTL+Khz8vMvn8/ppvqROMr+XlszHZmvVSwIUs7JiO0h2G/dTZMvTIw2npwLPyHpYJ0/M4uIwOVVsrfhp2XRHix4zlvYARsYKMQrHbKaBx9cTHgWeD6+Z3hF5LUezqtvl0Z0NrHXN3W+/wA+qPPqcao5LDzuzYJrpsUUf8x4/wBWWMYzbf78l9TrhpFWc9VnViGZANyg+GwRRK8eR+z6ffM8k1J21uaaaWjnmTagF3uYsD+6AADXlzuFeqyklSSLSXLFLvr+/wB9Dz1KGQVAKAUAwRACAbgAYBQCgDACAUAgIBQBgGTAKANwCEAYBmAMAhANCARgBANAQCgHTTqrOqsaUsoY+ikgE38pWTai2gfXyfnnyHUeBVy5F74mjjJZmOELROYAm9g8S31A4PMvgivd6tpad/Hw89n2smj6b6LTLjXKNSQ+zGpfuSCigbMRAs9wciqv5wg1XFbuedZMzk4OGmul79X2uuxakZXJkGPu+6BDY8rlCxyb277S7cjZgfG20AjKCK3GtoFA4xcua9mtdq0lpXTy6+JKTZz02TAQSztkcFWW6Zg6g7cb6gbRmHJogWPWqnTgU/fR0pfvp0+ZK4KXERfJKunz6eZ8gueSpvaj0QNoQ7SKXH/y/Pnzrr1npc1Xy9n6enQpHDSbXTfv6nRwC5DeG2Ph6hr6nZ+qevjsdPnEnctev5+n1OhY1zcr+9+nTzOWow47AVt1ABQfCGBN3v8APknjj0lZRhejsmeKF0nfZbX6/wDR58zErbdQ5AHShtW1A8qofWZt2tTKduFy3uvyR57lTEoAEQAgGoBkiAEAoBQBgBAAwCgCIAwCgGTAKAMAoAwCMAjAC4AwCgCIAwAMAUxFyEAssQoB6WxoD+MhyUVbB9vtgflOUnEbZSyd0SoZqY3lxDgOXNuyjxbmY0RVcuH/ACofFs9b+j7VsuleJZ6nY9mZ1Zc+zKoOLEoAXazFMKY8iPvG1EBxmy4IquGvinvsbThaer9NbW2t66USovc7Ztegw92ExAEZD4N5xjx4QVsNRDHltgC3jFKepzWKXvOa307Xs/06XrrujrxOHI00u/WtK0+/6M+VhxMxBF8MrVwVCruvaVFEc+Qnfj0Z04cE8uqvRp+FK9mtGvzLBkCfaXdtVvt/bYBT4SByqnp4r9vbpjKtymKaxO5K6T3/ABPTaui/3X9rUjczBfMm2Xkmz/zBy1e4Ne3pMvibr9+ZGZe8nJR69Vv/AMlv6p14HnzaZxtBFUtEtwBbM3Xz4I6XM3CS0Zz5eHyKoyVUtb0W7e/r0DUsCq1fhJWz1PApj+HyURJ2kVzSUoRa6aee2v08kjyyhzEIAwDJgFAIwAgCYBQCgBAAwCgCIAwCuABEAIAQBEAiYAwCBgERANQCuAUAYBQDWNypDKaIIKn0INg/wkNJqmD1dq4hvLqPzeUtkx+lMbKf3kJ2ke19CJnhfw8r3Wj+/ruSztq9QKTC4vGuPEUrhkZ8SZHZSetlzYPXjpQMpCG846O3fjTr/os30ex0x41GK924UwQFWBIvGWO0XYUjyNeI88GUk28lV2vXzr5nZhhBYnNvulo/C9OtfXwZ5tPqD5WfEqkn9lt1gKOFHHQTdKjXhuJa0j3Sd9nd6bJeCDSurkhmIBVgS1nYCCLD9SOeh+tzZPuZ4ZQyupulT31rTfm3rwfzszqaV2vltx4qlHPFk8sOnpcPRmWblhllzau9ui+/6M56lr2seSVsn1pmX8FEiTujLNJy5ZS3a+rX0LJwoXzssfa6AB96BP8Amh6KhP4YqD33f0/ficZBiUAIBXAKAZIgFAAGARgDACAUAoBqAVwA2wDQEAisAztgFUAKgCIAlYBLANQDJMAoBQBgG7kA76bVMgKimUm2RhuQmquvJq/WUg+8pKClr17rclOj1/lK5AoGLEMijaoJyEMtnaF35CCwJIprsbQOlHLkcG7k6fl9Ft5GkWmtFqefUNkO0tuDhmHQhgaWqFcccAfu+0tHkVpVReXPyxetpv6EmULe9RZFUAQR+8VBAB9qB+Xnar2N8eWOK/eRVtVpdrxaTS9NH5HDKrVQHh8to8JPlz1J+fMumY5I5GqS+H/52fr99TvkvcdwGyzywP37SCCb5NA+cvZtkUnN86+G939Nm/Jadznk1PNqoWqA6kgDgdSaPuPOHIwnnt3GKXbq1Xm3+RwEqc4GSAMAIBGAIgERAM1AGoBkwCAgDUAQsA1UAzUAKgGjAEQCgFAIwDLQBEARAIQAMAyYAQBgGlgGpAIGADQDth1TKCpJKkUVDEfT0MpKCevU1hllFVenawONfJxX7wYH+AI/jJt9UOSL2kvW/syDhfskk+osAfLzJ+knfcvHIsWsHr32S+r+hyLXyTZ9+skwcnJ23YwQUApIMGABgBANCAaEAoAQDLQDUAYBCAUAIAwDO6AIgETADdAC4AXAEQB3QBBgCYBkiAVQCgDANgQCMAyYBkwBEAIAwDQgCIBloAGAFQCIgCIAkwDNwCuAZJgFcA0GgEGgGiYBm4BboAVAImAEAIBoQAIgHXBhZyFUWT/Vn2lZSUVbNcOGeaaxwVtntzaXDiO12dm8wlAD72mcZznqlS8T0c/C8Jwr5MspSl15aSXzD8gDKXxPaqGLBuHWlJFgdbqrEupPZmD4OE4vJhlcUm2nutL9b7o8KjyH9fKXOA+w3ZKYkD6l2Bb7ONKL+9k8f11k0julwkcUVLM9X0W5aXQ6bOdmN8mN/wBUZNrK3sCvnLxjGWiMoww5NItp+J8/W6R8TFHFEfQjyIPmJSUXF0zCcHB0z2dkaHFmO0s4eieNu0gHy8/MTXFjjN1bshUce0sGPGxRC5IPJNV08q59JGWMYvlRB4bmQPq9laDFmJG7IGAs/Zo+tTaMIS2swyZJQ7GMmHTKxUtmsMVJASrBo+fSZSVbF05tXodtT2Ce777C4ypRJoUwA68edefn7TH3iUuVhZNaeh5eysOB2CZmyLuYKGTbQvjxXz19JGaWSMbhWncu76H2u2uwtJpWRcmTUHeCQUGMgUQDd16zhwcXxGdNwUdO9lYybM9q/CoXT/lWmy97i27iCKYL5t715igRRjB7Rby+5zR5ZbeH77Fkz2/C/wAMaXWozLk1CFCFYN3fUi7WgeOvX0mPHe0M/CyScYu9tyyPz3bOHTo5TAcxKuys2XYAdpq0C89Qes9Lh5ZpRUslapPS/wA7IPnToAQD9J2b8LnL2fm1nO5WvGPI48djMa8/P/6/eebl49Y+Ljg6Pfze378TaOK8bkfnsO3cN27bfi21ur92+LnoSuvh38TJVep+n7I+H9JqULY82YEHxKwQML6dBRB55HpPL4jjeIwSSnFa9VZ6XDcHgzq4yflofB7X0yYsjY07zwkq2/bZPkVryr1nfw855IKcq17HHxGOGPI4RvTe6OuXS6dcavuzeK9qkJdA1u+UpHJmc3Glp11OuWDhI4o5JOWuy0vTr5HzG68f0J1HnOr0KCAgEIBXAGoA1AKAZMAoA1AKoAwD7vw1iFO3nYX7up/EfScnEvZH1H/j2Jcs8nW6+p8bUvbsT5sT/GdMVSSPnM83PLKT6t/qWmzlN1frIyEezAj+Bo/dJasYsrxt11TT9T6fwvhDZwT+qpYfPgD8YZ1+zMalnt9FYfE+YnUMP2Qqj/tDfi0kp7Rm5Z2u2h8tHKkMDRBBB9xyI2OJOtT9b8XYg2JMnmGH0YGx9QJ1ZlcUzu4pXFM+P8Mfp/8AI3+krwv8w4keXtf9Nk/vGZ5v5jIPHMwfY+Ff0rf3D/Ms1w7sw4j8J87X/pcn+I/8xmct2aw/Cj9N8B5T+dTyBRvvO4H+UTj4paJmWZbM+HrcITVsg6DMKHoNwIH8amsXzYrfY1TuNn6z447Jz53xHDiZwFYGtookirsieR7O4jFijLnlWxWDSR6MuZNB2cdPkdWzMmRQgN+LKWvj9ld3J8695goS4zjPewTUU1r5fVllq7H+yb7Gf++n4NHt/wDFDyf0Lx3PwPaP6bL/AImT+cz6DF/Lj5L9CDzzQHbR6VsuRMSC3dgij3Y0L9uZTJkjjg5y2SslK3R/UPhT4gxNqMvZ6FTixIEwerDENmYt6lmJb5XPl+P4Oawx4p/ibuXheq+Wx3cPkTk4dD+d/EnZf5NqcmH9UHcn+G3K/Tp81M+h4PiPf4Y5OvXz6nJmx8k2jj2R2k2nyjIvPky/tKeo/wBR7gS/EYI5oODLcPnlhmpr18T9R8RaHDnVNUHpAAXI6snkB+/fh+/2nl8JlyYm8Na9PB/bqe3xfD4s8Y8RdLr4r79D8hrNQcjFiK8go6Ko4VR7AT2McFCNHh5sryz5n6LsuiOMuZFACoAGAEA2IBQCgGTACANQBgDAPqdga0IxRuA1UfIMP9/9pz8RjclaPc9icZHDkeObpS/X+55O1NMceRr6EkqfIg81900xTUoo4faPDS4fPJNaN2n4M7dn6ElHyMKUY323+s2w1Q866/cJLlrRPDcI5QnlmtFF1fV108tzPZGs7nKHPTo1ddp6/Tg/dLmHCZ/c5VPps/I+l8TaQkjUY/EjAWV5AI4BPsRX0k0dftDFzS99DVPsfN7J7PbO4VQdtje3kF8+fX2kxjzOjgxY3klSPq/FfaKuRiQ2FNsR03dAo+Vm/wDxNc07+FG3E5E3yo83wuPzxPohv7yKk8KvjOZHm7ZwsMz2DybHHBBHlK5ovnehB5sOmZtxqgqliaNceXzlY45St9lZWU0qPqfCqnvGPltr7yR/tLYVqzHiNkeHtHTuM2QbW5diODyCxIr16zKW5rCS5Ufpfh/GNJhfLn8Jcil/WIUHateps8eXnOPMnkajEym+eVI/NYnbLqFNWz5QaHPJe+PYf6TeVQxvskb1SP0v9pOPxYGI42ut+V2pr+vSeZ7Jaqa8imM/GqoHlPXND+j/ANk/6POfLegv3Cmx/EfWfNe3vxQXgyYn4jtbR5Fz5QyOD3r9VP7Zoj1B9Z7uDLCWKLTWy6+BA4uychwZdQVKpjOMeJSN7ZH20pPoOT93rEuIgsscSdt36UrJrSz6fwwjYcOftEKawp3eBqte/wAp7vvOeCEUm/K2AnNxso5ckOFb/E7l/tWterLQ0TkZxfHWvVlZ9QXUEFlKYgGUHlSQgIscWPWJeyuFlFxjCn3t/cvHiJxd2fpf7Sezxlw49UgPhA3cc90/IJHsf5jPM9jZvd5JYJddvNfc7OMx80FNdD+cEz6Q80/XZcDf8LAo3Qavbvd1/TmeOpL+Ov8Aex7zhJ+zarx/Oz8fc9g8EbgCYBmARgBANCANQAuAUAoAwCgBAKAevD2jlUUHNehAb8ZR44vWjtxe0eJxx5VPTs6f6nLUap3O5mJNEc+hFEAdBYMsopbGGXiMuWXNOTbOAMkxPVo9flx/o3Zfl0/7TxCdGkM08f4XR31HbGdxtbK1egpfrtAuW5mWlxGSSpv9+h4RKmJ6cOvyoNq5GAHkJdZJJUmTbNntTN/1W+st7/J3KtJmMmuysCGdiD1BMh5sjVNlfdxu6FO0MoAAyMB85HvJbWPdx7HT/i2f/qv9ZR67j3cex5smVnNsxY+rEk/UyKLJJbHXR9oZcV93kZL67eLlJ4oT/ErDSZ3y9uallKtncqQQQTwQeoma4XCnairFI+cZ0En1cfxJrFAC6jIABQAIr8Jyy4Hh5O3BA6f+q9d/8rL9f/Er/h/C/wDrRNs4a/t/VZ0OPNnfIhq1Y2OORL4uDwYpc8IJPug5NncfFuvqvyvLXpYr6VKf4fwt37tE88u583TazJjfvUcq/J3Dr4uv4zonjhOPJJWuxCbTtHtf4n1p/wDc5PqP9pguB4Zf0I1/iMv+pnzjq8ned7uO+73ed9LnR7uPLyVp2M+eXNzXqes9t6k9c7/WZfwuH/SjoXG8Qv62eLLkLEsxsnqZvGKiqRzym5vmluYklSgDAAwCgEDACAaqAFQCqAUAiYBQCgFcAjACoBtUNEgcCrPpZoSLV0WUJOLklot/XY64MLO21RZN8WB0Fnr7CRKSirZMISm+WO5vDocjbNqg94xRPEniYVYHPuPqPWVllhG7e2r0ZKxSaTXXbUw+kcELQJJ2gKyvbAgbfCTRsjj3krJFpv8AsVcWjpi7Nys2RAvixBjkBdE2BDTklmAoHrUrLNCMVJvR7bu722I5XsGTQ5FdcZWmcKU5WmD/AGWV72lT6g1JWWDi5J6LfwrfTcUdl7IzbigVdy7gwGXESpxi3DU/BAB+h9JT+Ix8qlejro+u3Qg54dBketoBtWceNPsJe5jbcVR6+hlpZoR38tn12BjFp3ZWZR4UALGwKs0OCbPPHEu5JNJ9SLOeNCxCgEkmgB1JliTo2lbjgGztBDKRu9LBoHkQtSOZHPLiK9a6kGiDyOoNHiS00E7NHTNV1+ru6g+H9qgbqS4S+otDk0jr1HFgdQaLC1ujxY9YcGty1Mzm07ISGABBojcpIPoQDxIcWiXFrcV0z7im07hdji+BZ+fEgssU3LkS17AuBiAQOCSByBZAs/T1kOSRMMGSaTS0e3pv8jk6UefboQeosciE7KSi4umFSSpXAIwCgFAK4BGAVQBqAVQBqAEAagBUAqgEYA1AAiAFQAgHr02pVRtIJBBDevPSufKgfr6zKcHJ2jtwcTDHFwatNNP12rXpp+2PZuoGPIHNkDd0AvxKV8z7390ZoOcHFGHD5FjyKb6X+ao9mm7UVfycsGJw5TkNKoDAlDQojnwD6+3OM+Hb56/qVdfH7l1nVQv+l308PsZbXJ3ne+NmAfYDjRVBN7L2PfG5juHN7fQ3ZYpcvJpWl6v13RlKabs9+btvC+XNlZcgbPpWwZNqKR3rBVbKoOT7J2A7etk88zCPC5IwjBNVGXMt9l02313Eppts8Wp7TVn0wCsMenVVF0XeshyMxF0LJIC2aHmZtDA4rJb1nfktKRRs6t20DqmzspKN3y7aVXGPN3ljjgsO9PJ61z7U/hf8hY09Vy+Vxr8tPQg5aLX48bD7ZUYcmIHaoYnJvtiu6hXeHiz0688Xy4Zzj0u0/lXh4ENHPBqcS48mO3PeKg3bV4KZN97d/SgB19flNJQnKUZaaX+arsGmcdLqRjyB1BIHkeCQV2t0uuprrXE0abVMNWqHHqVVVQbiBkGQkgA+EUFABrzPN/hLJlXFvU46vNvYt7muAOCSaNfMyZO2TFUqO41aghgDYx93zQHIILdeeCeJq8i0a7UEmjer1quu2mHKGwBztUL4ueelj5kSJ5FJUac2garWq+Q5PF9oso2rxfqQfFyF+kpKVuzSWSLlzAdaNy5BYcJR44LAEKeTfSgflKvU1XEpTWRfiS/Pp1+YZdap20GWndhVcBgAK59Rf3mZ8jNZcXB8vKnGm2qrS1pXrq++x5dTl3NYFcC+ALNcmhwLloqlRy8RlWSfMlW3hb6uulnKWMSAgGqgARAKoBVAGoBQCgDAK4AQCEAagBACoBqABgBACAIEAoAwCEA0BACAUARAIwBqAZgFAFYAEQAgBAKAEAYAwBgAYBVAECAUAIBQBDQAqAIgCIBQCqABEAC3lAKAVQBqAVQAIgFANQCJgBAKAIMArgEDAAwCgCDAK4AQAqAVQBgFUAKgETUAjANVAKoBQAgBUAQIAiAEARAK4AXACABEArgDAGARgCIAQCEAoBCAUAYAEQCgEYBQCAgDACAIEAIBGABgFAAwBEArgGgYBQAgCBAAwD//2Q==",
    name: "COLD PLAY",
    date: "2025-04-20",
    location: "AHEMADBADH",
    price: 15,
  },
];

const Events = () => {
  return (
    <Container className="mt-4">
      <h2>Upcoming Events</h2>
      <Row>
        {events.map((event, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={event.img} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  📅 {event.date} <br />
                  📍 {event.location} <br />
                  💲 {event.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
