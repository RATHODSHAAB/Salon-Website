export const MapEmbeded = () => {
  return (
    <div className="overflow-hidden rounded-lg w-full h-75 md:h-75 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.937612755226!2d75.14184037577766!3d27.614386576236054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca550efaa5753%3A0xefc93105433398aa!2sRich%20Looks%20Salon!5e1!3m2!1sen!2sin!4v1768715888768!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
