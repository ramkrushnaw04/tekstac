import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CarUtilTest {

    @Test
    void testGetCarType_StaticMocking() {
        try (MockedStatic<CarUtil> mockedStatic = mockStatic(CarUtil.class)) {
            mockedStatic.when(() -> CarUtil.getCarType("basic")).thenReturn("Economy");
            mockedStatic.when(() -> CarUtil.getCarType("premium")).thenReturn("SUV");
            mockedStatic.when(() -> CarUtil.getCarType("luxury")).thenReturn("Luxury");

            assertEquals("Economy", CarUtil.getCarType("basic"));
            assertEquals("SUV", CarUtil.getCarType("premium"));
            assertEquals("Luxury", CarUtil.getCarType("luxury"));
        }
    }

    @Test
    void testGetCarBrand_FinalMocking() {
        CarUtil mockCarUtil = mock(CarUtil.class);

        when(mockCarUtil.getCarBrand("fleetA")).thenReturn("Ford");
        when(mockCarUtil.getCarBrand("fleetB")).thenReturn("Hyundai");
        when(mockCarUtil.getCarBrand("fleetC")).thenReturn("Toyota");

        assertEquals("Ford", mockCarUtil.getCarBrand("fleetA"));
        assertEquals("Hyundai", mockCarUtil.getCarBrand("fleetB"));
        assertEquals("Toyota", mockCarUtil.getCarBrand("fleetC"));
    }
}
