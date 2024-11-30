import { useState } from "react";
import Image from "next/image";
import FormButtons from "@/components/FormButtons";

export default function RegisterUnityForm() {
  const [previewImage, setPreviewImage] = useState<any>();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  console.log(previewImage);

  return (
    <form className="flex flex-col gap-5 mt-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Nome da unidade
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Insira o nome da unidade"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">CNPJ</label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="number"
            placeholder="Insira o número do cnpj"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Email
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="email"
            placeholder="Insira o email da unidade"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Telefone
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="number"
            placeholder="Insira o telefone da unidade"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              CEP
            </label>
            <input
              className="w-[265px] border pl-5 py-3 text-themis-text-gray rounded appearance-none"
              type="number"
              placeholder="Insira o cep da unidade"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              Estado
            </label>
            <input
              className="w-[265px] border pl-5 py-3 text-themis-text-gray rounded"
              type="text"
              placeholder="Insira o estado da unidade"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Cidade
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Insira o nome da cidade"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Logradouro
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Rua das flores"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Complemento
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Complemento"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              Bairro
            </label>
            <input
              className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
              type="text"
              placeholder="Insira o bairro da unidade"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              Número de identificação da unidade
            </label>
            <input
              className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
              type="number"
              placeholder="Insira o número de indentificação da unidade"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Foto da unidade
          </label>
          <div className="2xl:w-[539px] h-36 border px-24 py-2 text-themis-text-gray rounded">
            <div className="relative w-full h-full flex justify-center items-center border-2 border-dashed rounded border-themis-border cursor-pointer">
              <input
                id="upload-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="upload-file"
                className="cursor-pointer w-full h-full flex justify-center items-center"
              >
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Pré-visualização"
                    objectFit="contain"
                    fill={true}
                    unoptimized
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M9.16667 38.5C8.15833 38.5 7.29544 38.1413 6.578 37.4238C5.86056 36.7064 5.50122 35.8429 5.5 34.8333V9.16667C5.5 8.15834 5.85933 7.29545 6.578 6.57801C7.29667 5.86056 8.15956 5.50123 9.16667 5.50001H22C22.5194 5.50001 22.9552 5.67601 23.3072 6.02801C23.6592 6.38001 23.8346 6.81512 23.8333 7.33334C23.8321 7.85156 23.6561 8.28728 23.3053 8.64051C22.9546 8.99373 22.5194 9.16912 22 9.16667H9.16667V34.8333H34.8333V22C34.8333 21.4806 35.0093 21.0455 35.3613 20.6947C35.7133 20.3439 36.1484 20.1679 36.6667 20.1667C37.1849 20.1655 37.6206 20.3415 37.9738 20.6947C38.3271 21.0479 38.5024 21.483 38.5 22V34.8333C38.5 35.8417 38.1413 36.7052 37.4238 37.4238C36.7064 38.1425 35.8429 38.5012 34.8333 38.5H9.16667ZM11 31.1667H33L26.125 22L20.625 29.3333L16.5 23.8333L11 31.1667ZM31.1667 12.8333H29.3333C28.8139 12.8333 28.3788 12.6573 28.028 12.3053C27.6772 11.9533 27.5012 11.5182 27.5 11C27.4988 10.4818 27.6748 10.0467 28.028 9.69467C28.3812 9.34267 28.8163 9.16667 29.3333 9.16667H31.1667V7.33334C31.1667 6.8139 31.3427 6.37878 31.6947 6.02801C32.0467 5.67723 32.4818 5.50123 33 5.50001C33.5182 5.49878 33.9539 5.67478 34.3072 6.02801C34.6604 6.38123 34.8358 6.81634 34.8333 7.33334V9.16667H36.6667C37.1861 9.16667 37.6218 9.34267 37.9738 9.69467C38.3258 10.0467 38.5012 10.4818 38.5 11C38.4988 11.5182 38.3228 11.954 37.972 12.3072C37.6212 12.6604 37.1861 12.8358 36.6667 12.8333H34.8333V14.6667C34.8333 15.1861 34.6573 15.6218 34.3053 15.9738C33.9533 16.3258 33.5182 16.5012 33 16.5C32.4818 16.4988 32.0467 16.3228 31.6947 15.972C31.3427 15.6212 31.1667 15.1861 31.1667 14.6667V12.8333Z"
                      fill="#5C5C5C"
                    />
                  </svg>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
      <p className="text-right text-[11px] relative bottom-4 right-[275px] text-themis-text-light-gray">
        Insira um arquivo JPG ou PNG - Máximo de 2MB
      </p>
      <hr />
      <FormButtons />
    </form>
  );
}
